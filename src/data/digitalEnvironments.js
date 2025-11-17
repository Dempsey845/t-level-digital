const topics = [
  {
    id: "7.1",
    title: "Hardware",
    outcomes: [
      "Understand the features and uses of different types of physical computers: personal computers, mobile devices (smartphones and tablets), servers, embedded devices.",
      "Understand the features and uses of different hardware devices: input devices, output devices, processors (number of cores, clock speed, cache size, mobile processors), main memory (RAM, ROM), secondary storage (magnetic, solid state, optical), motherboard, graphics processing units, network interface devices (PCI, USB), cooling (air, liquid), sensors.",
    ],
  },
  {
    id: "7.2",
    title: "Software",
    outcomes: [
      "Understand the features and use of operating systems: batch (non-interactive, high volume, scheduling), multitasking (concurrent tasks, time-slicing, interrupts), real-time (monitoring/control, transaction processing), network (resource sharing, user management, communication), mobile (smartphones/tablets, lower processing, longer battery life).",
      "Understand the features and use of common utilities: file management, defragmenters, file compression, package managers, protection software, backup software.",
      "Understand the features and use of common code development tools: IDEs (code editing, debugging, screen design tools), compilers, interpreters.",
      "Understand the features and use of common application software: word processors, spreadsheets, databases, email, project management software.",
    ],
  },
  {
    id: "7.3",
    title: "Networks",
    outcomes: [
      "Understand the benefits and drawbacks of connecting devices to form networks.",
      "Understand the features of different types of networks: number of users, connection media, coverage media, network types (PAN, LAN, MAN, WAN, VPN).",
      "Understand connectivity methods: wired (copper/ethernet, fibre-optic), wireless (wireless access points).",
      "Understand common network topologies: star, mesh, tree, and logical vs physical topologies.",
      "Understand different network models: client-server, thin client, peer-to-peer.",
      "Understand the role of common network components: server, client, router, network switch, internet connection/backbone.",
      "Understand the seven-layer OSI model: application, presentation, session, transport, network, data link, physical layers with related protocols.",
      "Understand the four-layer TCP/IP model: application, transport, internet, network layers with related protocols.",
      "Understand the role of data packets in network transmission, including structure, components, packet switching (causes of packet loss), and error handling (CRC).",
      "Understand the role of common network protocols: web (HTTP, HTTPS), mail (SMTP, POP, IMAP), routing (RIP, OSPF), application (FTP, SFTP, DHCP, DNS).",
      "Understand bandwidth and latency and their effect on network performance.",
    ],
  },
  {
    id: "7.4",
    title: "Virtual Environments",
    outcomes: [
      "Understand the role and characteristics of virtual environment components: virtual machines (clients, servers) and hypervisors (type 1, type 2).",
      "Understand key features of virtual environments: increased security, managed execution, sharing, aggregation, emulation, isolation, portability.",
      "Understand benefits of virtual environments: cost-effectiveness, easy management, resilience, lower carbon footprint, improved disaster recovery, better testing, education and training options.",
      "Understand drawbacks of virtual environments: extra hardware load, slower execution, potential false performance representation.",
    ],
  },
  {
    id: "7.5",
    title: "Cloud Environments",
    outcomes: [
      "Understand different types of cloud: private and public.",
      "Understand benefits of cloud use: portability, elasticity, fewer storage limitations, cost effectiveness.",
      "Understand common cloud delivery models and responsibilities: IaaS (client manages apps, system software, data, user accounts; provider manages virtualisation and hardware), PaaS (client manages apps, data, user accounts; provider manages virtualisation, hardware, system software, runtime), SaaS (client manages user accounts and data; provider manages virtualisation, hardware, system software, runtime, apps).",
    ],
  },
  {
    id: "7.6",
    title: "Resilient Digital Environments",
    outcomes: [
      "Understand benefits of resilient environments: increased security (data storage/transfer, reduced vulnerabilities), increased reputation (brand/image protection, customer confidence), reduced downtime.",
      "Understand methods to improve resilience: software updates/upgrades (planned, patches), hardware replacement (rolling plans, secure disposal), data/system redundancy, device hardening (removing unneeded ports, apps, permissions), backup systems and recovery procedures (onsite, remote/offsite, cloud), hot/cold/warm sites, standard operating procedures (staff training, induction, new systems, updated policies).",
    ],
  },
];

export default topics;
