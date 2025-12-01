import RevisionPageTemplate from "./RevisionPageTemplate";

const sections = [
  {
    code: "1.2.1",
    title: "Definition & Purpose of Algorithms",
    description:
      "An algorithm is a step-by-step procedure for solving a problem or performing a task. Its characteristics include being clear, unambiguous, finite, and effective. Algorithms are used to build efficient and repeatable solutions.",
  },
  {
    code: "1.2.2",
    title: "Ways to Express Algorithms",
    description:
      "Algorithms can be expressed as flowcharts (diagrammatic), written descriptions using hierarchical markers (step-by-step text), or code (programming instructions). Each method provides a way to represent the logic of a solution.",
  },
  {
    code: "1.2.3",
    title: "Benefits & Drawbacks of Flowcharts",
    description:
      "Flowcharts provide a visual representation, making logic easy to follow and communicate. However, they can become complex for large problems and may be time-consuming to create.",
  },
  {
    code: "1.2.4",
    title: "Benefits & Drawbacks of Written Descriptions",
    description:
      "Written descriptions are simple to produce and easy to modify. They can lack clarity for complex processes and may be misinterpreted without visual aids.",
  },
  {
    code: "1.2.5",
    title: "Benefits & Drawbacks of Code",
    description:
      "Code can be executed by a computer and allows for testing and automation. It may be harder for non-programmers to read and requires knowledge of a programming language.",
  },
  {
    code: "1.2.6",
    title: "Controlling Order of Steps",
    description:
      "Algorithms control execution order through sequence (steps in order), selection (decision-based branching using if/else or match/case), and iteration (repeating steps using loops like for/while).",
  },
  {
    code: "1.2.7",
    title: "Determining Algorithm Purpose",
    description:
      "Understanding an algorithm's purpose involves analysing what problem it solves and the steps it follows to achieve the intended outcome.",
  },
  {
    code: "1.2.8",
    title: "Determining Output from Input",
    description:
      "By following each step of an algorithm with the given input, you can predict the output and verify the algorithm behaves as expected.",
  },
  {
    code: "1.2.9",
    title: "Identifying Errors in Algorithms",
    description:
      "Errors can be logical, syntactical, or semantic. Identifying errors involves checking steps for correctness, completeness, and proper handling of inputs.",
  },
  {
    code: "1.2.10",
    title: "Correcting Errors in Algorithms",
    description:
      "After identifying mistakes, you can correct them by modifying steps, improving logic, or adding necessary conditions to ensure the algorithm works correctly.",
  },
  {
    code: "1.2.11",
    title: "Translating Between Notations",
    description:
      "Algorithms can be translated between flowcharts, written descriptions, and code. This requires maintaining the same logical flow and ensuring each representation accurately reflects the steps.",
  },
  {
    code: "1.2.12",
    title: "Designing Algorithms Using Actions",
    description:
      "When designing algorithms, use actions such as sequence, selection, and iteration to build clear, efficient, and executable solutions for specific problems.",
  },
];

export default function RevisionAlgorithmicDesign() {
  return (
    <RevisionPageTemplate
      title="Algorithmic Design — Revision"
      sections={sections}
    />
  );
}
