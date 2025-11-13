import TopicsList from "../components/TopicsList/TopicsList";

const topics = [
  {
    id: "4.1",
    title: "Legislation",
    outcomes: [
      "Understand the key points and implications to employers of relevant health and safety legislation: Health and Safety at Work Act — provide a safe working environment, ensure staff are properly trained, maintain adequate welfare provision, and provide relevant information, instruction, and supervision.",
      "Understand the key points and implications to employers of relevant health and safety legislation: Display Screen Equipment Regulations — employers must conduct workstation assessments, reduce risks (including ensuring workers take breaks from screen work), provide eye tests upon request, and offer training and information for employees.",
      "Understand the health and safety risks and preventative measures of working with digital systems: risks include using display screen equipment and general health and safety requirements; mitigation methods include adequate training, safe working environments, and safe working practices.",
      "Understand data security and protection legislation and its effects on organisations and individuals: Data Protection Act / General Data Protection Regulation — purpose of legislation and the eight data protection principles.",
      "Understand computer misuse legislation: principles of the Computer Misuse Act (CMA) 1990, consequences for companies and employees, employee awareness, and the types of crimes covered by this legislation.",
      "Understand equality legislation: nine protected characteristics, types of discrimination (direct, indirect, harassment, victimisation), where individuals are protected, and time limits for taking action against discrimination.",
      "Understand intellectual property legislation: unregistered designs, registered designs, and patents.",
      "Understand the interrelationships between digital software development and digital legislation, and make judgements about their impacts on organisations, society, and individuals.",
      "Know that international law applies to some offences: international law in cyberspace and international law concerning surveillance.",
    ],
  },
  {
    id: "4.2",
    title: "Guidelines",
    outcomes: [
      "Know the sources of codes of conduct: organisational, professional (British Computer Society — BCS, Institution of Analysts and Programmers — IAP, Chartered Institute of Information Security — CIISec), and governmental.",
      "Understand how guidelines in codes of conduct influence professional behaviour: ensuring individuals follow policies, procedures, and legislation; ensuring quality of work by minimising risk to the public and acting with competence and integrity; meeting deadlines; effective communication; maintaining confidentiality and trust.",
      "Know the sources of digital industry standards: International Organization for Standardization (ISO), Web Content Accessibility Guidelines (WCAG), World Wide Web Consortium (W3C), Internet Engineering Task Force (IETF), British Standard (BS), Institute of Electrical and Electronics Engineers (IEEE), and Payment Card Industry Security Standards Council (PCI SSC).",
      "Understand the purpose of acceptable use policies (AUP): define permitted and prohibited activities, working practices (including confidentiality), communication etiquette (projecting correct organisational image), and sanctions or penalties.",
      "Understand the importance of whistleblowing procedures.",
      "Understand the interrelationships between digital software development and guidelines, and make judgements about the impact on organisations, society, and individuals.",
    ],
  },
];

export default function Legislation() {
  return <TopicsList topics={topics} title={"Legislation Topics"} />;
}
