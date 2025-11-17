import RevisionPageTemplate from "./RevisionPageTemplate";

const sections = [
  {
    code: "1.1.1",
    title: "Definition & Purpose of Computational Thinking",
    description:
      "Computational thinking is a logical approach to problem solving that involves breaking a problem down and creating a step-by-step solution that a human or computer could follow. Its purpose is to help us build efficient solutions to complex tasks and design systems that can be repeated or automated.",
  },
  {
    code: "1.1.2",
    title: "When to Use Computational Thinking",
    description:
      "Computational thinking is used when a problem is too large to solve all at once, when tasks need to be repeated accurately or automated, and when a process must be planned in precise logical steps. Examples include designing programs, simulations and analysing real-world processes (e.g., a checkout system).",
  },
  {
    code: "1.1.3",
    title: "Benefits & Drawbacks of Computational Thinking",
    description:
      "Benefits: helps tackle complex problems, makes solutions systematic and repeatable, reduces human error and supports automation. Drawbacks: takes time to apply properly, may not suit creative or emotional tasks, and can lead to oversimplification if logic is prioritised too heavily.",
  },
  {
    code: "1.1.4",
    title: "Components of Computational Thinking",
    description:
      "The key components are: Decomposition – breaking problems into smaller parts; Pattern Recognition – spotting similarities and trends; Abstraction – focusing only on relevant information; Algorithmic Design – developing clear step-by-step instructions.",
  },
  {
    code: "1.1.5",
    title: "Benefits & Drawbacks of CT Components",
    description:
      "Decomposition: makes tasks manageable but over-splitting can complicate. Pattern recognition: speeds up development but patterns may be assumed incorrectly. Abstraction: reduces complexity but may remove key detail. Algorithmic design: ensures precision but can be rigid.",
  },
  {
    code: "1.1.6",
    title: "Purpose of Decomposition",
    description:
      "Decomposition breaks large or complex problems into smaller, simpler parts that are easier to design, implement and test. It allows tasks to be divided among developers and makes faults easier to locate.",
  },
  {
    code: "1.1.7",
    title: "Tasks of Decomposition",
    description:
      "Identify the main parts of the problem, define the purpose of each part (inputs/outputs), and keep splitting the overall problem into manageable sub-problems. Example: a computer game split into movement, scoring, enemies, menus, collisions, sounds, etc.",
  },
  {
    code: "1.1.8",
    title: "Using Decomposition for Problem Solving",
    description:
      "Example: Online food ordering system → split into user login, menu display, basket management, checkout and order tracking. Each part becomes simpler to plan and test individually.",
  },
  {
    code: "1.1.9",
    title: "Representing Decomposition",
    description:
      "Methods include block diagrams (system structure), information flow diagrams (data movement), flowcharts (logic and sequencing), code structure charts (modules) and written descriptions. These help visualise and communicate design.",
  },
  {
    code: "1.1.10",
    title: "Using Methods to Represent Decomposition",
    description:
      "Example: Login system → input username and password, check database, success leads to dashboard, failure displays an error. Represented as a flowchart, diagram or pseudo code to show structure clearly.",
  },
  {
    code: "1.1.11",
    title: "Purpose of Pattern Recognition",
    description:
      "Pattern recognition identifies similarities within or between problems, so existing solutions can be reused. It speeds up development and improves accuracy by adapting proven designs.",
  },
  {
    code: "1.1.12",
    title: "Using Pattern Recognition in Problem Solving",
    description:
      "Example: Many games include scoring, time limits, health systems and collisions. These patterns allow developers to reuse code templates rather than start from scratch each time.",
  },
  {
    code: "1.1.13",
    title: "Purpose of Abstraction",
    description:
      "Abstraction simplifies problems by focusing only on essential information while ignoring unnecessary detail. This makes models easier to understand and reduces complexity.",
  },
  {
    code: "1.1.14",
    title: "Tasks of Abstraction",
    description:
      "Essential steps include identifying needed information, filtering out irrelevant detail and hiding internal complexity. Example: Online maps show roads and locations but not every tree or person.",
  },
  {
    code: "1.1.15",
    title: "Using Abstraction",
    description:
      "Example—cinema booking system: Inputs include selected film, seat and payment details. Output is a confirmed booking. Ignore irrelevant features such as seat colour or staff schedules.",
  },
  {
    code: "1.1.16",
    title: "Using Abstraction in Problem Solving",
    description:
      "Example: Robot vacuum → inputs: room map, start position, battery; output: cleaned room. Ignore wall decorations or colours. Simplified model improves reliability.",
  },
  {
    code: "1.1.17",
    title: "Interrelationships & Suitability in Software Development",
    description:
      "CT components work together. Decomposition splits problems; pattern recognition compares them; abstraction removes complexity; algorithm design creates a solution. Developers must choose which component(s) are most suitable depending on the task and desired solution.",
  },
];

export default function RevisionComputationalThinking() {
  return (
    <RevisionPageTemplate
      title="Computational Thinking — Revision"
      sections={sections}
    />
  );
}
