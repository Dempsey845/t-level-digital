import TopicsList from "../components/TopicsList/TopicsList";

const topics = [
  {
    id: "5.1",
    title: "Business Environment",
    outcomes: [
      "Know the purpose and sectors of different types of organisations: providing a service or product; private sector (SME, large enterprise, NGO); public sector; voluntary/charity (not-for-profit).",
      "Know the names and definitions of different business models: Business to Customer (B2C), Business to Business (B2B), Business to Many (B2M).",
      "Know the different types of stakeholders: internal stakeholders (owners, directors, employees); external stakeholders (customers or clients, suppliers, shareholders, outsourced services, investors or funders, government).",
    ],
  },
  {
    id: "5.2",
    title: "Digital Value to Organisations",
    outcomes: [
      "Understand how digital systems are used to support key organisation areas: Sales and Marketing (market research, brand promotion, online selling, customer personalisation, retention, brand values, analytics tools); Research, Design and Development (unique products and services); Human Resources (staff records, performance management, training records); Operations (communication, process automation, manufacturing, remote working, shared workspaces); Management (real-time KPI monitoring such as sales and asset tracking); Logistics (automated stock control); Finance (reduced costs, increased revenue, better reporting).",
      "Understand how digital systems are used to meet user needs and ensure quality of product/service: appropriate functionality to allow all required tasks, reduced pain points (response time, task complexity), accessibility, compatibility with legacy and future systems, availability (minimise downtime, future proofing), effective user support, and ease of installation.",
    ],
  },
  {
    id: "5.3",
    title: "Risk to Organisations of Using Digital Systems",
    outcomes: [
      "Understand the potential risks to organisations when using digital systems: security breaches (compromised confidentiality, loss of integrity, reduced availability), privacy breaches (personal and business information), regulatory non-compliance, audience exclusion (bias, poor UX), emerging rival technologies, and technical issues (system failure, not fit for purpose).",
      "Understand the potential impact of risks to organisations when using digital systems: legal action, fines, reputational damage, withdrawal of licence to practise, and loss of business.",
    ],
  },
  {
    id: "5.4",
    title: "Technical Change Management",
    outcomes: [
      "Understand the internal factors that trigger change in organisations: restructuring, expansion, downsizing, and new strategic objectives (diversification, rebranding, new features or services).",
      "Understand the external factors that trigger change in organisations: political (government changes, conflict, policy shifts); economic (new services, recession, inflation, interest rates, consumer trends, competitors, new markets); social (demographics, trends, remote working, cultural expectations); technological (emerging or obsolete technologies, system failure, vulnerabilities); legal (new or changed legislation); environmental (sustainability, pandemics, natural disasters).",
      "Understand how organisations can respond to change: new or amended policies and processes (staffing, schedules, hours); new or updated products, services, or systems (backend, customer-facing); improved training; restructuring (management or boundaries).",
      "Understand the processes, benefits and drawbacks of the change management process: identify type of change (new system or amendment), role of Change Advisory Board (prioritise, review, approve, monitor, feedback), identify changes using SMARTER objectives, assess positive/negative impacts, allocate resources (budget, time, staff, tech), communicate risks to stakeholders (gain acceptance, compliance), configure new systems (integration, service continuity), test new systems (reproducibility, test environment), implement change (parallel, phased, direct, pilot), document changes (traceability, accountability, records, training manuals), plan rollbacks (backups, recovery), identify training needs (new or refresher), monitor progress (post-review), and use version control software.",
      "Understand the factors that determine the feasibility of a digital project: benefits and drawbacks (financial savings, costs, productivity, communication, security, new products, reputation); risks (resistance to change, misuse, inadequate support or knowledge, disruption); and constraints (budget, time, human and technological resources).",
    ],
  },
];

export default function BusinessContext() {
  return <TopicsList topics={topics} title={"Business Context Topics"} />;
}
