import TopicsList from "../components/TopicsList/TopicsList";

const topics = [
  {
    id: "2.1",
    title: "Standard Data Types",
    outcomes: [
      "Know the definition of common data types and understand their purpose and when each is used: integer, float, string, Boolean.",
    ],
  },
  {
    id: "2.2",
    title: "Variables and Constants",
    outcomes: [
      "Know the definition of variables, understand their purpose and when they are used.",
      "Know the definition of constants, understand their purpose and when they are used.",
      "Understand the purpose of data type conversion functions and why they are used.",
      "Know a definition of scope and understand the role of scope and when it is used.",
      "Know and understand how variables are managed by scope: global variables, local variables.",
      "Be able to use scope.",
      "Be able to declare variables and constants using standard data types.",
      "Be able to use variables and constants.",
      "Be able to use data type conversion functions.",
    ],
  },
  {
    id: "2.3",
    title: "Data Structures",
    outcomes: [
      "Know the standard data structures and understand their purpose and when each is used: list, array, dictionary.",
      "Be able to interpret code using data structures.",
      "Be able to develop code using data structures.",
      "Be able to debug code using data structures.",
    ],
  },
  {
    id: "2.4",
    title: "Operators",
    outcomes: [
      "Understand the purpose of arithmetic operators: add, subtract, divide, multiply, exponentiation, integer division, modulus.",
      "Understand the purpose of relational operators: equivalence, less than, greater than, not equal, less than or equal to, greater than or equal to.",
      "Understand the purpose of Boolean operators: not, and, or.",
      "Be able to use operators: arithmetic, relational, Boolean.",
      "Be able to interpret code using operators.",
      "Be able to create code using operators.",
      "Be able to debug code using operators.",
    ],
  },
  {
    id: "2.5",
    title: "Input and Output",
    outcomes: [
      "Understand how to implement input and output: keyboard, screen, text file.",
      "Know and understand the use of text files for input and output: open a file for reading, open a file for writing, write lines to the file, close the file.",
      "Be able to interpret code using input and output.",
      "Be able to create code using input and output.",
      "Be able to debug code using input and output.",
    ],
  },
  {
    id: "2.6",
    title: "Actions",
    outcomes: [
      "Know and understand sequence, its purpose and when it is used.",
      "Know and understand selection, its purpose and when it is used: if, else if, else, match/case.",
      "Know and understand loops, their purpose and when they are used: count-controlled loop, condition-controlled loop.",
      "Know and understand iteration: count-controlled ‘for’ loops, condition-controlled ‘while do’ loops.",
      "Know and understand the benefits and drawbacks of loops.",
      "Be able to interpret code using actions: sequence, selection, iteration.",
      "Be able to develop code using actions: sequence, selection, iteration.",
      "Be able to debug code using actions: sequence, selection, iteration.",
    ],
  },
  {
    id: "2.7",
    title: "Functions and Procedures",
    outcomes: [
      "Know characteristics of functions, understand their purpose and when they are used: may or may not take parameters, must return a result.",
      "Know characteristics of procedures, understand their purpose and when they are used: may or may not take parameters, must not return a result.",
      "Know and understand where functions and procedures come from: user-written, pre-written and built-in as part of the programming language, pre-written and supplied in libraries as part of the language, or from third parties.",
      "Know and understand the benefits and drawbacks of using pre-written code.",
      "Be able to interpret code using user-written and pre-written code: functions, procedures.",
      "Be able to develop code using user-written and pre-written code: functions, procedures.",
      "Be able to debug code using user-written and pre-written code: functions, procedures.",
    ],
  },
  {
    id: "2.8",
    title: "Validation",
    outcomes: [
      "Know the definition of validation and understand the purpose and when validation checks are used: presence check, length check, range check, type check, format check, check digit.",
      "Be able to interpret code using validation.",
      "Be able to develop code using validation.",
      "Be able to debug code using validation.",
    ],
  },
  {
    id: "2.9",
    title: "Design Considerations and Programming Practices",
    outcomes: [
      "Determine the logical order for actions within processes.",
      "Determine the order of operations in calculations and processes to ensure outputs are accurate and errors are avoided.",
      "Determine the selection of data structures to ensure efficiency of execution time and efficient use of memory.",
      "Determine the order of actions to ensure efficiency of execution time and efficient use of memory.",
      "Know and understand naming conventions and their purpose: meaningful names, camelCase, snake_case.",
      "Understand the impact on readability of code style conventions: naming conventions, use of white space, maximum line length.",
      "Make judgements about the suitability of an algorithm in meeting requirements, efficiency in storage and execution time, and appropriateness in choice of data structures, data types, variables, constants, presentation and maintainability.",
    ],
  },
  {
    id: "2.10",
    title: "Robust Code",
    outcomes: [
      "Know and understand the characteristics of robust code: handles unexpected inputs, handles unexpected terminations, produces specific and meaningful error messages.",
      "Know and understand the process of debugging and when it is used: locating errors in code, correcting errors in code.",
      "Understand the role of debugging in producing solutions that are robust.",
      "Be able to locate errors in code.",
      "Be able to correct errors in code.",
    ],
  },
  {
    id: "2.11",
    title: "Common Algorithms",
    outcomes: [
      "Know and understand the algorithms for searching, how they work and when they are used: linear search, binary search.",
      "Know and understand the algorithms for sorting, how they work and when they are used: bubble sort, insertion sort, merge sort.",
      "Know and understand the benefits and drawbacks of using: linear search, binary search, bubble sort, insertion sort, merge sort.",
      "Know and understand metrics to compare algorithms: use of memory space, execution time, number of comparisons.",
      "Know and understand best case, worst case and average case for common algorithms, using logical reasoning (Big O not required).",
      "Make judgements about the suitability of using different algorithms for searching.",
      "Make judgements about the suitability of using different algorithms for sorting.",
    ],
  },
  {
    id: "2.12",
    title: "Testing",
    outcomes: [
      "Understand the reasons for testing individual components of a solution before putting them together: software, hardware, data, interfaces, resulting service.",
      "Know a definition of testing methods and understand their purpose, benefits, drawbacks, and when they are used: concept, unit, boundary, integration, performance, system, acceptance, usability, regression, load/stress, closed box, open box.",
      "Be able to use testing methods.",
      "Know and understand the purpose of automation methods and when they are used: macros, scripts, functional testing tools.",
      "Know a definition for types of test data and understand the purpose of test data and when it is used: valid, invalid, boundary, erroneous.",
      "Be able to create test data.",
      "Know and understand the steps and structure of a test plan and when it is used: identifying tests, describing purposes, identifying test data, describing expected results, recording actual results.",
    ],
  },
];

export default function Programming() {
  return <TopicsList topics={topics} title={"Programming Topics"} />;
}
