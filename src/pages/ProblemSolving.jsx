import TopicsList from "../components/TopicsList/TopicsList";

const topics = [
  {
    id: "1.1",
    title: "Computational Thinking",
    outcomes: [
      "Know the definition and understand the purpose of computational thinking.",
      "Know when to use computational thinking.",
      "Know and understand the benefits and drawbacks of using computational thinking.",
      "Know the components of computational thinking: decomposition, pattern recognition, abstraction, algorithmic design.",
      "Know and understand the benefits and drawbacks of using the components of computational thinking.",
      "Know and understand the purpose of decomposition.",
      "Know the tasks of decomposition: identify the main features of a problem, characterise each identified feature, break problems and solutions into smaller, more manageable parts.",
      "Be able to use decomposition for problem solving.",
      "Know and understand methods to represent decomposition: block diagrams, information flow diagrams, flowcharts, code, written descriptions.",
      "Be able to use the methods to represent decomposition.",
      "Know and understand the purpose of pattern recognition.",
      "Be able to use pattern recognition for problem solving: find and interpret trends and similarities within and between problems and processes, find and interpret common features between a given problem and existing solutions, make predictions and assumptions based on identified patterns.",
      "Know and understand the purpose of abstraction.",
      "Know and understand the tasks of abstraction: identify information that is needed, filter out unnecessary details, hide details of internal workings.",
      "Be able to use abstraction: identify inputs, expected outputs, variables, constants, key actions, and repeated processes.",
      "Be able to use abstraction in problem solving.",
      "Understand the interrelationships between components of computational thinking and make judgements about their suitability in digital software development.",
    ],
  },
  {
    id: "1.2",
    title: "Algorithmic Design",
    outcomes: [
      "Know the definition and understand the characteristics and purpose of algorithms.",
      "Know and understand that algorithms can be expressed in: flowcharts, written descriptions using hierarchical markers, and code.",
      "Know and understand the benefits and drawbacks of expressing algorithms in flowcharts.",
      "Know and understand the benefits and drawbacks of expressing algorithms in written descriptions.",
      "Know and understand the benefits and drawbacks of expressing algorithms in code.",
      "Know and understand actions to control ordering of steps in algorithms: sequence, selection, iteration.",
      "Be able to determine the purpose of an algorithm and how it works.",
      "Be able to determine the output of an algorithm given an input.",
      "Be able to identify errors in an algorithm.",
      "Be able to correct errors in an algorithm.",
      "Be able to translate between different notations for algorithms.",
      "Be able to design algorithms and solutions that use actions.",
    ],
  },
  {
    id: "1.3",
    title: "Strategies",
    outcomes: [
      "Know the different approaches to solving problems and understand their purpose and when they are used: top-down, bottom-up, modularisation.",
      "Know the benefits and drawbacks of using the different approaches to solving problems.",
      "Understand the purpose of root cause analysis and when it is used.",
      "Know and understand approaches to root cause analysis: five whys, failure mode and effects analysis (FMEA), event tree analysis (ETA), and actions to take after using root cause analysis such as logging, closing, or escalating issues.",
      "Know and understand the process of the high-level problem-solving strategy: define the problem, gather information, analyse information, make a plan, implement a solution, review the solution.",
      "Understand the interrelationships between problems and problem-solving strategies and make judgements about the suitability of strategies for solving problems in digital software development.",
    ],
  },
];

export default function ProblemSolving() {
  return <TopicsList topics={topics} title={"Problem Solving Topics"} />;
}
