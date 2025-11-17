const topics = [
  {
    id: "6.1",
    title: "Data, Information and Knowledge",
    outcomes: [
      "Know and understand the differences and relationships between data, information and knowledge.",
      "Know and understand sources for generating data: humans (surveys, forms), AI and machine learning (dangers of feedback loops), sensors (temperature, accelerometer, vibration, sound, light, pressure), Internet of Things (smart thermostats, lights, security cameras, trackers), and transactions (customer data, membership, timing, basket).",
      "Know and understand ethical data practices and the metrics to determine the value of data: quantity, timeframe, source, veracity.",
      "Understand how organisations use data and information: analysing patterns, system performance (load, outage, throughput, status), user monitoring (logins, resources), targeted marketing (discounts, upselling), and threat/opportunity assessment (competitors, security, compliance).",
      "Understand the interrelationships between data, information, and the way it is generated, and make judgements about their suitability in digital software development.",
    ],
  },
  {
    id: "6.2",
    title: "Methods of Transforming Data",
    outcomes: [
      "Know and understand methods of transforming data: manipulating, analysing, and processing.",
    ],
  },
  {
    id: "6.3",
    title: "Data Taxonomy",
    outcomes: [
      "Know the definition and purpose of each data category: quantitative and qualitative.",
      "Know the definition and purpose of structured data and understand that quantitative data is structured.",
      "Know the definition and purpose of unstructured data and understand that qualitative data is unstructured.",
      "Know and understand the representations of quantitative data: discrete values, continuous values, and categorical values.",
      "Know and understand the properties of qualitative data: stored and retrieved as a single object, and codified into structured data.",
      "Understand the interrelationships between data categories, data structure and transformation, and make judgements about their suitability in digital software development.",
    ],
  },
  {
    id: "6.4",
    title: "Data Types",
    outcomes: [
      "Know the definition, purpose, and use cases of common data types: integer, real, character, string, Boolean, date, and Blob.",
      "Understand the interrelationships between structured data, unstructured data, and data type.",
      "Understand the interrelationships between data type and data transformation.",
      "Be able to make judgements about the suitability of structured data, unstructured data, data types and transformations in digital software development.",
    ],
  },
  {
    id: "6.5",
    title: "Data Formats",
    outcomes: [
      "Know the definition, purpose, and use cases of common data formats: JSON, text file, CSV, UTF-8, ASCII, and XML.",
      "Understand the interrelationships between data format and data transformation, and make judgements about the suitability of using data formats in digital software development.",
    ],
  },
  {
    id: "6.6",
    title: "Structures for Storing Data",
    outcomes: [
      "Understand the role of metadata in providing descriptions and context for data.",
      "Know the definition and purpose of file-based and directory-based structures and when each is used.",
      "Know the definition and purpose of hierarchy-based structure and when it is used.",
      "Understand the interrelationships between storage structures and data transformation.",
    ],
  },
  {
    id: "6.7",
    title: "Data Dimensions and Maintenance",
    outcomes: [
      "Know and understand the six Vs (dimensions) of Big Data — volume, variety, variability, velocity, veracity, and value — and their impact on gathering, storing, maintaining, and processing data.",
      "Know the definition of Big Data and understand that it has multiple dimensions.",
      "Understand the impact of each Big Data dimension on how data is gathered and maintained.",
      "Know the definitions, purposes, and use cases of data quality assurance methods: validation, verification, reliability, consistency, integrity, and redundancy.",
      "Know and understand factors that affect how data is maintained: time, skills, and cost.",
      "Understand the interrelationships between data dimensions, data quality assurance, and maintenance factors, and make judgements about maintaining, transforming, and assuring data quality in digital software development.",
    ],
  },
  {
    id: "6.8",
    title: "Data Systems",
    outcomes: [
      "Know the definition and purpose of data wrangling and when it is used.",
      "Know and understand the purpose of each step in data wrangling: structure, clean, validate, enrich, and output.",
      "Know and understand the core functions of a data system: input, search, save, integrate, organise (index), output, and feedback loop.",
      "Know the types of data entry errors (transcription and transposition) and understand how and why they occur.",
      "Know and understand methods to avoid data entry errors: validation and verification (double entry), drop-down menus, pre-filled data boxes.",
      "Know and understand factors impacting data entry: time and expertise required to design screens and enter data.",
      "Understand the relationships between data entry factors, data quality, and methods to reduce errors in digital software development.",
      "Understand the relationship between data entry implementation factors and make judgements about suitable approaches in digital software development.",
    ],
  },
  {
    id: "6.9",
    title: "Data Visualisation",
    outcomes: [
      "Know and understand data visualisation formats and when they are used: graphs, charts, tables, reports, dashboards, and infographics.",
      "Know and understand the benefits and drawbacks of visualisation formats depending on data type, intended audience, and project brief.",
    ],
  },
  {
    id: "6.10",
    title: "Data Models",
    outcomes: [
      "Know and understand the types of data models and how they organise data: hierarchical, network, and relational models.",
      "Know and understand the factors affecting data model selection: efficiency of data access, storage efficiency, and complexity of implementation.",
      "Understand the benefits and drawbacks of data models and make judgements about suitability based on efficiency and complexity.",
      "Be able to draw and represent data models: hierarchical (blocks, arrows, labels), network (blocks, arrows, labels), and relational (tables, rows, columns, labels).",
    ],
  },
  {
    id: "6.11",
    title: "Data Access Across Platforms",
    outcomes: [
      "Understand the features, purposes, benefits, and drawbacks of accessing data across platforms: permissions (authorisation, privileges, access rights, rules) and access mechanisms (role-based access control, rule-based access control, APIs).",
      "Know and understand the benefits and drawbacks of data access methods across platforms.",
      "Understand the interrelationships between data access requirements and methods and make judgements about their suitability in digital software development.",
    ],
  },
  {
    id: "6.12",
    title: "Data Analysis Tools",
    outcomes: [
      "Know data analysis tools, their purpose, and when they are used: storing Big Data (data warehouses, data lakes, data marts), analysing data (data mining, reporting), and using business intelligence (financial planning, CRM, customer analytics, communications).",
      "Understand the interrelationships between data analysis tools and the scale of data.",
    ],
  },
];

export default topics;
