import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import app from "../lib/firebase";

const db = getFirestore(app);

function toCamelCase(text) {
  return text
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

export const AREAS = [
  "problemSolving",
  "programming",
  "emergingIssues",
  "legislation",
  "businessContext",
  "data",
  "digitalEnvironments",
  "security",
];

export async function getTopicById(id) {
  const area = id.split(".")[0];
  const ref = doc(db, "areas", area, "topics", id);
  const snapshot = await getDoc(ref);

  return snapshot.exists() ? snapshot.data() : null;
}

export async function getTopicsByAreaName(areaName) {
  const camelName = toCamelCase(areaName);

  const areaIndex = AREAS.findIndex((area) => area === camelName);
  if (areaIndex === -1) return null;

  const areaId = (areaIndex + 1).toString();
  const topicsRef = collection(db, "areas", areaId, "topics");
  const snapshot = await getDocs(topicsRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
export async function getTopicAndAreaOfCard(card) {
  if (!card?.outcome_id) return null;

  const split = card.outcome_id.split(".");
  const topicId = `${split[0]}.${split[1]}`;
  const outcomeIndex = parseInt(split[2]) - 1;

  const areaIndex = parseInt(split[0], 10) - 1;
  const areaName = AREAS[areaIndex];

  const topic = await getTopicById(topicId);
  if (!topic) return null;

  const outcome = topic.outcomes[outcomeIndex];
  return { areaName, topic: { ...topic, outcome } };
}
