import problemSolving from "../data/problemSolving";
import programming from "../data/programming";
import emergingIssues from "../data/emergingIssues";
import legislation from "../data/legislation";
import businessContext from "../data/businessContext";
import dataTopics from "../data/data";
import digitalEnvironments from "../data/digitalEnvironments";
import security from "../data/security";

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

export const AREAS_MAP = {
  problemSolving,
  programming,
  emergingIssues,
  legislation,
  businessContext,
  data: dataTopics,
  digitalEnvironments,
  security,
};

export function getTopicById(id) {
  const areaIndex = parseInt(id.split(".")[0], 10) - 1;
  const areaName = AREAS[areaIndex];
  if (!areaName) return null;

  const topicsData = AREAS_MAP[areaName];
  return topicsData?.find((t) => t.id === id) || null;
}

export function getTopicAndAreaOfCard(card) {
  if (!card?.outcome_id) return null;

  const split = card.outcome_id.split(".");
  const topicId = `${split[0]}.${split[1]}`;

  const areaIndex = parseInt(card.outcome_id.split(".")[0], 10) - 1;
  const areaName = AREAS[areaIndex];
  if (!areaName) return null;

  const topic = getTopicById(topicId);
  topic.outcome = topic.outcomes[parseInt(split[2] - 1)];

  return { areaName, topic };
}
