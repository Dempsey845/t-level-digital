import RevisionPageTemplate from "./RevisionPageTemplate";

const sections = [
  {
    code: "1.3.1",
    title: "Problem-Solving Approaches",
    description:
      "Problems can be solved using top-down (breaking a problem into smaller parts), bottom-up (building solutions from smaller components), or modularisation (dividing solutions into reusable modules). Each approach is used depending on problem complexity and organisation.",
  },
  {
    code: "1.3.2",
    title: "Benefits & Drawbacks of Problem-Solving Approaches",
    description:
      "Top-down allows clear planning but may miss low-level details. Bottom-up builds from tested components but can be disorganised initially. Modularisation improves reuse and maintainability but requires careful design.",
  },
  {
    code: "1.3.3",
    title: "Purpose of Root Cause Analysis",
    description:
      "Root cause analysis identifies the underlying cause of a problem, not just symptoms. It is used to prevent recurrence and improve systems, processes, and solutions.",
  },
  {
    code: "1.3.4",
    title: "Root Cause Analysis Methods",
    description:
      "Common approaches include: Five Whys (asking 'why?' repeatedly), FMEA (analysing potential failure points and effects), and ETA (examining possible event sequences). After analysis, actions include logging, closing, or escalating issues.",
  },
  {
    code: "1.3.5",
    title: "High-Level Problem-Solving Strategy",
    description:
      "Steps: Define the problem, gather information, analyse information, make a plan, implement a solution, and review the solution. This structured approach ensures efficient and effective problem resolution.",
  },
  {
    code: "1.3.6",
    title: "Choosing Suitable Problem-Solving Strategies",
    description:
      "Evaluate the problem type and context to select the best approach. Consider factors like complexity, resources, and goals to ensure the strategy fits digital software development requirements.",
  },
];

export default function RevisionStrategies() {
  return (
    <RevisionPageTemplate title="Strategies — Revision" sections={sections} />
  );
}
