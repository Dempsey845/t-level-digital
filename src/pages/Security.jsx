import TopicsList from "../components/TopicsList/TopicsList";

const topics = [
  {
    id: "8.1",
    title: "Security Risks",
    outcomes: [
      "Know the types of confidential information held by organisations: HR (salaries and benefits, staff personal details), commercially sensitive information (client details, stakeholder details, intellectual property, sales numbers, contracts), access information (usernames, passwords, MFA details, PINs, access codes, passphrases, biometric data).",
      "Understand why information must be kept confidential: prevent competitors from attracting staff, protect privacy, prevent IP copying, protect clients, prevent unauthorised access, maintain organisation trust and compliance.",
      "Understand the potential impact of failing to maintain privacy and confidentiality: non-compliance with regulations (loss of licence), loss of trust, damage to organisation image, financial loss (fines, refunds, loss of earnings), legal action, reduced security.",
    ],
  },
  {
    id: "8.2",
    title: "Types of Threats and Vulnerabilities",
    outcomes: [
      "Understand potential technical threats and their impact, including prevention and mitigation: botnets, DoS/DDoS attacks, malicious hacking (hacktivists, nation states, organised crime, individuals; password cracking, XSS, SQL injection, buffer overflow), malware (viruses, worms, key loggers, ransomware, spyware, remote access trojans), social engineering (phishing, spear phishing, smishing, vishing, pharming, watering hole attacks, USB baiting), DNS attacks, insecure APIs, man-in-the-middle attacks, open/unsecured Wi-Fi networks.",
      "Understand potential technical vulnerabilities: inadequate security processes (weak encryption, poor password policies, no MFA), out-of-date components (hardware, software, firmware).",
      "Understand potential human threats and mitigation: human error (file properties, confirmation boxes, staff training), malicious employees (immediate removal, suspend accounts), disguised criminals (accompany visitors, check ID), poor cyber hygiene (lock machines, do not write passwords, manage passwords properly).",
      "Understand potential physical vulnerabilities and mitigation: lack of access control (entry systems), poor access control (no tailgating, complex codes, regular code changes, access monitoring, audits), location risks (shoulder surfing, environmental protection, vandalism), poor system robustness (rugged machines), natural disasters.",
      "Understand the potential impact of threats and vulnerabilities: data loss/leakage, unauthorised digital access, data corruption, service disruption, unauthorised access to restricted physical areas.",
    ],
  },
  {
    id: "8.3",
    title: "Threat Mitigation",
    outcomes: [
      "Understand common threat mitigation techniques: security settings (hardware, software), anti-malware software (functions and actions), intrusion detection, encryption (hashing, symmetric, asymmetric), user access policies, staff vetting and training, software-based access control, device hardening, backups (full, incremental, differential, safe storage), software updates, firmware/driver updates, air gaps, API certification, VPNs, MFA, password managers, port scanning, penetration testing (ethical and unethical).",
      "Understand processes and procedures that assure internet security and why they are used: firewall configuration (traffic rules, application rules, IP address rules), network segregation (virtual, physical, offline), network monitoring, port scanning.",
    ],
  },
  {
    id: "8.4",
    title: "Interrelationship of Components for Effective Security",
    outcomes: [
      "Understand the CIA triad: confidentiality (control data access), integrity (prevent tampering, maintain confidentiality), availability (ensure data is usable, maintain integrity).",
      "Understand the IAAA model: identification (recognise individuals using knowledge, possession, biometric methods), authentication (verify identity using MFA, passwords, biometrics), authorisation (ensure users access only permitted resources using roles and access control lists), accountability (trace user actions with audit logs and activity monitoring).",
    ],
  },
];

export default function Security() {
  return <TopicsList topics={topics} title={"Security Topics"} />;
}
