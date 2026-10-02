// RoadmapX dummy data
// Each roadmap: identity, description, skills, salary, duration,
// a 3-level topic timeline, resources, projects and certificates.

let uid = 0
const t = (title, description) => ({ id: `t${++uid}`, title, description })

export const categories = [
  'All',
  'Development',
  'Design',
  'Data',
  'AI/ML',
  'Security',
  'Cloud & Ops',
  'Mobile',
]

export const roadmaps = [
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    category: 'Development',
    icon: '🎨',
    color: 'from-violet-500 to-cyan-400',
    tagline: 'Build the interfaces people actually touch.',
    description:
      'Frontend developers turn designs into fast, accessible, interactive interfaces using HTML, CSS, JavaScript and modern frameworks like React. It is the most in-demand entry point into web development.',
    duration: '5–7 months',
    salary: { entry: '₹4.5 LPA', mid: '₹10 LPA', senior: '₹22 LPA+' },
    skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Responsive Design', 'Git & GitHub', 'REST APIs', 'Testing'],
    levels: [
      {
        level: 'Beginner',
        duration: '6–8 weeks',
        topics: [
          t('HTML5 Fundamentals', 'Semantic tags, forms, accessibility basics.'),
          t('CSS3 & Layouts', 'Flexbox, Grid, box model, responsive units.'),
          t('JavaScript Basics', 'Variables, functions, loops, DOM manipulation.'),
          t('Git & GitHub', 'Version control, branching, pull requests.'),
        ],
      },
      {
        level: 'Intermediate',
        duration: '8–10 weeks',
        topics: [
          t('Modern JavaScript (ES6+)', 'Arrow functions, destructuring, async/await, modules.'),
          t('React Fundamentals', 'Components, props, state, hooks.'),
          t('State Management', 'Context API, Redux Toolkit or Zustand.'),
          t('Routing', 'React Router, nested routes, protected routes.'),
          t('Working with APIs', 'Fetch, Axios, handling loading & error states.'),
        ],
      },
      {
        level: 'Advanced',
        duration: '6–8 weeks',
        topics: [
          t('Performance Optimization', 'Code splitting, lazy loading, memoization.'),
          t('Testing', 'Jest, React Testing Library, e2e with Playwright/Cypress.'),
          t('TypeScript for React', 'Typing props, hooks, and API responses.'),
          t('Build Tools & Deployment', 'Vite, bundling, CI/CD, Vercel/Netlify.'),
        ],
      },
    ],
    resources: [
      { title: 'MDN Web Docs — JavaScript Guide', type: 'Documentation' },
      { title: 'React Official Docs', type: 'Documentation' },
      { title: 'freeCodeCamp — Responsive Web Design', type: 'Course' },
      { title: 'JavaScript.info', type: 'Tutorial' },
    ],
    projects: [
      { title: 'Personal Portfolio Website', difficulty: 'Beginner' },
      { title: 'E-commerce Product Listing App', difficulty: 'Intermediate' },
      { title: 'Real-time Chat UI with WebSockets', difficulty: 'Advanced' },
    ],
    certificates: [
      { name: 'Meta Front-End Developer', provider: 'Coursera' },
      { name: 'JavaScript Algorithms & Data Structures', provider: 'freeCodeCamp' },
    ],
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    category: 'Development',
    icon: '🛠️',
    color: 'from-cyan-400 to-mint-500',
    tagline: 'Power the logic behind every request.',
    description:
      'Backend developers design servers, databases and APIs that drive applications. They focus on data integrity, security, scalability and system performance.',
    duration: '6–8 months',
    salary: { entry: '₹5 LPA', mid: '₹12 LPA', senior: '₹25 LPA+' },
    skills: ['Node.js / Java / Python', 'Databases (SQL & NoSQL)', 'REST & GraphQL APIs', 'Authentication', 'System Design', 'Docker'],
    levels: [
      {
        level: 'Beginner',
        duration: '6–8 weeks',
        topics: [
          t('Programming Fundamentals', 'Pick one: Node.js, Python or Java.'),
          t('HTTP & REST Basics', 'Requests, status codes, endpoints.'),
          t('Databases 101', 'Relational modelling with SQL (PostgreSQL/MySQL).'),
          t('Version Control', 'Git workflows for backend teams.'),
        ],
      },
      {
        level: 'Intermediate',
        duration: '8–10 weeks',
        topics: [
          t('Building REST APIs', 'Express.js / Django / Spring Boot.'),
          t('Authentication & Authorization', 'JWT, OAuth2, sessions.'),
          t('NoSQL Databases', 'MongoDB, Redis for caching.'),
          t('ORMs', 'Prisma, Sequelize, Hibernate.'),
          t('Testing APIs', 'Postman, unit & integration tests.'),
        ],
      },
      {
        level: 'Advanced',
        duration: '8 weeks',
        topics: [
          t('System Design Basics', 'Load balancing, caching, message queues.'),
          t('Microservices', 'Service communication, API gateways.'),
          t('Docker & Containers', 'Building and shipping containerized services.'),
          t('CI/CD for Backend', 'Automated testing and deployment pipelines.'),
        ],
      },
    ],
    resources: [
      { title: 'Node.js Official Docs', type: 'Documentation' },
      { title: 'Designing Data-Intensive Applications', type: 'Book' },
      { title: 'PostgreSQL Tutorial', type: 'Tutorial' },
      { title: 'Roadmap.sh Backend Guide', type: 'Guide' },
    ],
    projects: [
      { title: 'Task Management REST API', difficulty: 'Beginner' },
      { title: 'E-commerce Backend with Auth & Payments', difficulty: 'Intermediate' },
      { title: 'Scalable URL Shortener Service', difficulty: 'Advanced' },
    ],
    certificates: [
      { name: 'Backend Development & APIs', provider: 'freeCodeCamp' },
      { name: 'Node.js Application Development', provider: 'IBM' },
    ],
  },
  {
    id: 'fullstack-developer',
    title: 'Full Stack Developer',
    category: 'Development',
    icon: '🧩',
    color: 'from-violet-500 to-mint-500',
    tagline: 'Own the product end-to-end, frontend to database.',
    description:
      'Full stack developers work across the entire application layer — UI, server logic, databases and deployment — making them versatile and highly employable.',
    duration: '8–10 months',
    salary: { entry: '₹5.5 LPA', mid: '₹13 LPA', senior: '₹28 LPA+' },
    skills: ['React.js', 'Node.js & Express', 'MongoDB / PostgreSQL', 'REST APIs', 'Git', 'Deployment (AWS/Vercel)'],
    levels: [
      {
        level: 'Beginner',
        duration: '8 weeks',
        topics: [
          t('HTML, CSS & JavaScript', 'Core web fundamentals.'),
          t('Git & GitHub', 'Collaboration and version control.'),
          t('Intro to Node.js', 'Server-side JavaScript basics.'),
          t('Database Basics', 'SQL vs NoSQL fundamentals.'),
        ],
      },
      {
        level: 'Intermediate',
        duration: '12 weeks',
        topics: [
          t('React for Frontend', 'Components, hooks, state.'),
          t('Express & REST APIs', 'Building the backend layer.'),
          t('MongoDB / PostgreSQL', 'Schema design & queries.'),
          t('Authentication', 'JWT-based login systems.'),
          t('Connecting Frontend & Backend', 'Full request/response cycle.'),
        ],
      },
      {
        level: 'Advanced',
        duration: '10 weeks',
        topics: [
          t('The MERN / MEAN Stack', 'Putting it all together.'),
          t('Deployment', 'Deploying full stack apps to the cloud.'),
          t('Performance & Security', 'Rate limiting, CORS, sanitization.'),
          t('System Design for Full Stack', 'Scaling a real product.'),
        ],
      },
    ],
    resources: [
      { title: 'The Odin Project', type: 'Course' },
      { title: 'Full Stack Open (University of Helsinki)', type: 'Course' },
      { title: 'MDN Web Docs', type: 'Documentation' },
    ],
    projects: [
      { title: 'Blog Platform with Auth', difficulty: 'Beginner' },
      { title: 'Full Stack Social Media App', difficulty: 'Intermediate' },
      { title: 'SaaS Dashboard with Payments', difficulty: 'Advanced' },
    ],
    certificates: [
      { name: 'Full Stack Web Development', provider: 'Meta / Coursera' },
      { name: 'MERN Stack Front To Back', provider: 'Udemy' },
    ],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    category: 'Design',
    icon: '🖌️',
    color: 'from-amber-500 to-violet-500',
    tagline: 'Design experiences people love to use.',
    description:
      'UI/UX designers research user needs and craft intuitive, visually compelling interfaces — bridging psychology, visual design and usability.',
    duration: '4–6 months',
    salary: { entry: '₹4 LPA', mid: '₹9 LPA', senior: '₹18 LPA+' },
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'],
    levels: [
      {
        level: 'Beginner',
        duration: '4 weeks',
        topics: [
          t('Design Fundamentals', 'Color theory, typography, layout, hierarchy.'),
          t('UX Principles', 'Usability heuristics and user-centered design.'),
          t('Figma Basics', 'Frames, components, auto layout.'),
        ],
      },
      {
        level: 'Intermediate',
        duration: '6 weeks',
        topics: [
          t('User Research', 'Interviews, personas, journey maps.'),
          t('Wireframing', 'Low to mid-fidelity screen flows.'),
          t('Prototyping', 'Interactive prototypes in Figma.'),
          t('Design Systems', 'Reusable components & style guides.'),
        ],
      },
      {
        level: 'Advanced',
        duration: '6 weeks',
        topics: [
          t('Usability Testing', 'Running tests and iterating on feedback.'),
          t('Handoff to Developers', 'Specs, tokens, and dev collaboration.'),
          t('Motion & Micro-interactions', 'Adding delight without noise.'),
          t('Portfolio Case Studies', 'Presenting design decisions.'),
        ],
      },
    ],
    resources: [
      { title: 'Figma Academy', type: 'Course' },
      { title: 'Don\'t Make Me Think — Steve Krug', type: 'Book' },
      { title: 'Laws of UX', type: 'Reference' },
    ],
    projects: [
      { title: 'Redesign a Popular App Screen', difficulty: 'Beginner' },
      { title: 'Mobile Banking App Case Study', difficulty: 'Intermediate' },
      { title: 'End-to-End Design System', difficulty: 'Advanced' },
    ],
    certificates: [
      { name: 'Google UX Design Certificate', provider: 'Coursera' },
      { name: 'UI Design Fundamentals', provider: 'Interaction Design Foundation' },
    ],
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    category: 'Data',
    icon: '📊',
    color: 'from-cyan-400 to-violet-500',
    tagline: 'Turn raw numbers into decisions.',
    description:
      'Data analysts collect, clean and interpret data to help organizations make informed decisions using tools like SQL, Excel, Python and BI dashboards.',
    duration: '4–6 months',
    salary: { entry: '₹4.2 LPA', mid: '₹9 LPA', senior: '₹18 LPA+' },
    skills: ['Excel', 'SQL', 'Python (Pandas)', 'Power BI / Tableau', 'Statistics', 'Data Visualization'],
    levels: [
      {
        level: 'Beginner',
        duration: '4 weeks',
        topics: [
          t('Excel for Analysis', 'Formulas, pivot tables, charts.'),
          t('SQL Fundamentals', 'SELECT, JOIN, GROUP BY, subqueries.'),
          t('Statistics Basics', 'Mean, median, distributions, correlation.'),
        ],
      },
      {
        level: 'Intermediate',
        duration: '6 weeks',
        topics: [
          t('Python for Data Analysis', 'Pandas, NumPy for wrangling.'),
          t('Data Cleaning', 'Handling missing values & outliers.'),
          t('Data Visualization', 'Matplotlib, Seaborn fundamentals.'),
          t('Power BI / Tableau', 'Building interactive dashboards.'),
        ],
      },
      {
        level: 'Advanced',
        duration: '6 weeks',
        topics: [
          t('Advanced SQL', 'Window functions, CTEs, optimization.'),
          t('A/B Testing', 'Hypothesis testing for business decisions.'),
          t('Storytelling with Data', 'Presenting insights to stakeholders.'),
          t('Capstone Analysis Project', 'End-to-end analysis on a real dataset.'),
        ],
      },
    ],
    resources: [
      { title: 'Mode Analytics SQL Tutorial', type: 'Tutorial' },
      { title: 'Kaggle Learn', type: 'Course' },
      { title: 'Storytelling with Data — Cole N. Knaflic', type: 'Book' },
    ],
    projects: [
      { title: 'Sales Performance Dashboard', difficulty: 'Beginner' },
      { title: 'Customer Churn Analysis', difficulty: 'Intermediate' },
      { title: 'End-to-End Business Intelligence Report', difficulty: 'Advanced' },
    ],
    certificates: [
      { name: 'Google Data Analytics Certificate', provider: 'Coursera' },
      { name: 'Microsoft Power BI Data Analyst', provider: 'Microsoft' },
    ],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Data',
    icon: '🔬',
    color: 'from-mint-500 to-cyan-400',
    tagline: 'Extract insight and build predictive models.',
    description:
      'Data scientists combine statistics, programming and domain expertise to build models that predict outcomes and uncover patterns in complex data.',
    duration: '7–9 months',
    salary: { entry: '₹6 LPA', mid: '₹14 LPA', senior: '₹30 LPA+' },
    skills: ['Python', 'Statistics & Probability', 'Machine Learning', 'SQL', 'Data Visualization', 'Deep Learning Basics'],
    levels: [
      {
        level: 'Beginner',
        duration: '8 weeks',
        topics: [
          t('Python for Data Science', 'NumPy, Pandas, Jupyter notebooks.'),
          t('Statistics & Probability', 'Distributions, hypothesis testing.'),
          t('SQL for Data Science', 'Querying and aggregating datasets.'),
        ],
      },
      {
        level: 'Intermediate',
        duration: '10 weeks',
        topics: [
          t('Machine Learning Fundamentals', 'Regression, classification, clustering.'),
          t('Scikit-learn', 'Model training, evaluation, tuning.'),
          t('Feature Engineering', 'Transforming raw data into signal.'),
          t('Data Visualization', 'Communicating model results.'),
        ],
      },
      {
        level: 'Advanced',
        duration: '8 weeks',
        topics: [
          t('Deep Learning Basics', 'Neural networks with TensorFlow/PyTorch.'),
          t('Model Deployment', 'Serving models with Flask/FastAPI.'),
          t('MLOps Fundamentals', 'Versioning, monitoring pipelines.'),
          t('Capstone Project', 'End-to-end predictive modelling project.'),
        ],
      },
    ],
    resources: [
      { title: 'An Introduction to Statistical Learning', type: 'Book' },
      { title: 'Andrew Ng — Machine Learning Specialization', type: 'Course' },
      { title: 'Kaggle Competitions', type: 'Practice' },
    ],
    projects: [
      { title: 'House Price Prediction Model', difficulty: 'Beginner' },
      { title: 'Customer Segmentation with Clustering', difficulty: 'Intermediate' },
      { title: 'End-to-End ML Pipeline with Deployment', difficulty: 'Advanced' },
    ],
    certificates: [
      { name: 'IBM Data Science Professional Certificate', provider: 'Coursera' },
      { name: 'Machine Learning Specialization', provider: 'DeepLearning.AI' },
    ],
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    category: 'AI/ML',
    icon: '🤖',
    color: 'from-violet-500 to-cyan-400',
    tagline: 'Design and ship intelligent systems.',
    description:
      'AI/ML engineers build, train and deploy machine learning and deep learning systems at scale — from model architecture to production infrastructure.',
    duration: '8–10 months',
    salary: { entry: '₹6.5 LPA', mid: '₹16 LPA', senior: '₹35 LPA+' },
    skills: ['Python', 'Deep Learning', 'PyTorch / TensorFlow', 'MLOps', 'NLP / Computer Vision', 'Model Deployment'],
    levels: [
      {
        level: 'Beginner',
        duration: '8 weeks',
        topics: [
          t('Python & Math Foundations', 'Linear algebra, calculus, probability.'),
          t('Machine Learning Basics', 'Supervised & unsupervised learning.'),
          t('Data Preprocessing', 'Cleaning and preparing training data.'),
        ],
      },
      {
        level: 'Intermediate',
        duration: '10 weeks',
        topics: [
          t('Deep Learning', 'Neural networks, CNNs, RNNs.'),
          t('PyTorch / TensorFlow', 'Building and training models.'),
          t('Computer Vision Basics', 'Image classification, object detection.'),
          t('NLP Basics', 'Text preprocessing, embeddings, transformers.'),
        ],
      },
      {
        level: 'Advanced',
        duration: '10 weeks',
        topics: [
          t('Large Language Models', 'Fine-tuning and prompt engineering.'),
          t('MLOps', 'CI/CD for ML, model monitoring.'),
          t('Model Deployment at Scale', 'Serving with Docker & cloud GPUs.'),
          t('Capstone AI Product', 'Ship a complete AI-powered application.'),
        ],
      },
    ],
    resources: [
      { title: 'Deep Learning Specialization', type: 'Course' },
      { title: 'PyTorch Official Tutorials', type: 'Documentation' },
      { title: 'Hugging Face Course', type: 'Course' },
    ],
    projects: [
      { title: 'Image Classifier with CNN', difficulty: 'Beginner' },
      { title: 'Chatbot with Transformers', difficulty: 'Intermediate' },
      { title: 'Production ML API with Monitoring', difficulty: 'Advanced' },
    ],
    certificates: [
      { name: 'Deep Learning Specialization', provider: 'DeepLearning.AI' },
      { name: 'TensorFlow Developer Certificate', provider: 'Google' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    category: 'Security',
    icon: '🛡️',
    color: 'from-amber-500 to-cyan-400',
    tagline: 'Defend systems before attackers find them.',
    description:
      'Cybersecurity professionals protect systems, networks and data from digital attacks through defense, monitoring, and ethical hacking practices.',
    duration: '6–8 months',
    salary: { entry: '₹5 LPA', mid: '₹12 LPA', senior: '₹26 LPA+' },
    skills: ['Networking', 'Linux', 'Security Fundamentals', 'Penetration Testing', 'SIEM Tools', 'Cryptography'],
    levels: [
      {
        level: 'Beginner',
        duration: '6 weeks',
        topics: [
          t('Networking Fundamentals', 'TCP/IP, DNS, firewalls.'),
          t('Linux Essentials', 'Command line & permissions for security work.'),
          t('Security Fundamentals', 'CIA triad, threats, vulnerabilities.'),
        ],
      },
      {
        level: 'Intermediate',
        duration: '8 weeks',
        topics: [
          t('Ethical Hacking Basics', 'Reconnaissance, scanning, enumeration.'),
          t('Web App Security', 'OWASP Top 10 vulnerabilities.'),
          t('Cryptography', 'Encryption, hashing, PKI basics.'),
          t('Security Tools', 'Nmap, Wireshark, Burp Suite.'),
        ],
      },
      {
        level: 'Advanced',
        duration: '8 weeks',
        topics: [
          t('Penetration Testing', 'Exploitation and reporting.'),
          t('SIEM & Incident Response', 'Detection, triage, response playbooks.'),
          t('Cloud Security', 'Securing AWS/Azure environments.'),
          t('Capstone: CTF Challenges', 'Applying skills in Capture The Flag events.'),
        ],
      },
    ],
    resources: [
      { title: 'TryHackMe', type: 'Practice Platform' },
      { title: 'OWASP Top 10', type: 'Reference' },
      { title: 'Professor Messer — Security+', type: 'Course' },
    ],
    projects: [
      { title: 'Home Lab Network Setup', difficulty: 'Beginner' },
      { title: 'Vulnerability Assessment Report', difficulty: 'Intermediate' },
      { title: 'Full Penetration Test on a Test Environment', difficulty: 'Advanced' },
    ],
    certificates: [
      { name: 'CompTIA Security+', provider: 'CompTIA' },
      { name: 'Certified Ethical Hacker (CEH)', provider: 'EC-Council' },
    ],
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    category: 'Cloud & Ops',
    icon: '☁️',
    color: 'from-cyan-400 to-mint-500',
    tagline: 'Architect infrastructure that scales globally.',
    description:
      'Cloud engineers design, deploy and manage scalable infrastructure on platforms like AWS, Azure and GCP — the backbone of modern applications.',
    duration: '5–7 months',
    salary: { entry: '₹5.5 LPA', mid: '₹13 LPA', senior: '₹28 LPA+' },
    skills: ['AWS / Azure / GCP', 'Networking', 'IAM & Security', 'Terraform', 'Containers', 'Monitoring'],
    levels: [
      {
        level: 'Beginner',
        duration: '5 weeks',
        topics: [
          t('Cloud Fundamentals', 'IaaS, PaaS, SaaS, core services.'),
          t('Networking Basics', 'VPCs, subnets, load balancers.'),
          t('Linux & Scripting', 'Bash scripting for automation.'),
        ],
      },
      {
        level: 'Intermediate',
        duration: '8 weeks',
        topics: [
          t('Core AWS Services', 'EC2, S3, RDS, Lambda.'),
          t('IAM & Security', 'Roles, policies, least privilege.'),
          t('Infrastructure as Code', 'Terraform / CloudFormation.'),
          t('Containers', 'Docker fundamentals & ECS/EKS basics.'),
        ],
      },
      {
        level: 'Advanced',
        duration: '7 weeks',
        topics: [
          t('Kubernetes on Cloud', 'Managing clusters at scale.'),
          t('Monitoring & Logging', 'CloudWatch, Prometheus, Grafana.'),
          t('Cost Optimization', 'Right-sizing and budgeting cloud spend.'),
          t('Multi-Cloud & DR', 'Disaster recovery and redundancy design.'),
        ],
      },
    ],
    resources: [
      { title: 'AWS Skill Builder', type: 'Course' },
      { title: 'Terraform Official Docs', type: 'Documentation' },
      { title: 'Kubernetes.io Documentation', type: 'Documentation' },
    ],
    projects: [
      { title: 'Host a Static Site on S3 + CloudFront', difficulty: 'Beginner' },
      { title: 'Auto-scaling Web App on AWS', difficulty: 'Intermediate' },
      { title: 'Multi-Region Infrastructure with Terraform', difficulty: 'Advanced' },
    ],
    certificates: [
      { name: 'AWS Certified Solutions Architect – Associate', provider: 'AWS' },
      { name: 'Microsoft Azure Fundamentals (AZ-900)', provider: 'Microsoft' },
    ],
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    category: 'Cloud & Ops',
    icon: '⚙️',
    color: 'from-mint-500 to-violet-500',
    tagline: 'Automate the path from code to production.',
    description:
      'DevOps engineers bridge development and operations, building CI/CD pipelines, automating infrastructure, and ensuring reliable, fast releases.',
    duration: '6–8 months',
    salary: { entry: '₹5.5 LPA', mid: '₹14 LPA', senior: '₹30 LPA+' },
    skills: ['Linux', 'CI/CD', 'Docker & Kubernetes', 'Terraform', 'Monitoring', 'Cloud Platforms'],
    levels: [
      {
        level: 'Beginner',
        duration: '6 weeks',
        topics: [
          t('Linux Fundamentals', 'File systems, processes, permissions.'),
          t('Git & Version Control', 'Branching strategies for teams.'),
          t('Scripting', 'Bash & Python for automation.'),
        ],
      },
      {
        level: 'Intermediate',
        duration: '8 weeks',
        topics: [
          t('CI/CD Pipelines', 'Jenkins, GitHub Actions, GitLab CI.'),
          t('Docker', 'Building, tagging, and shipping images.'),
          t('Configuration Management', 'Ansible fundamentals.'),
          t('Cloud Basics', 'Deploying to AWS/Azure/GCP.'),
        ],
      },
      {
        level: 'Advanced',
        duration: '8 weeks',
        topics: [
          t('Kubernetes', 'Orchestration, Helm charts, scaling.'),
          t('Infrastructure as Code', 'Terraform modules & state management.'),
          t('Monitoring & Alerting', 'Prometheus, Grafana, ELK stack.'),
          t('Site Reliability Practices', 'SLIs, SLOs, incident management.'),
        ],
      },
    ],
    resources: [
      { title: 'Docker Official Docs', type: 'Documentation' },
      { title: 'The Phoenix Project', type: 'Book' },
      { title: 'KodeKloud DevOps Courses', type: 'Course' },
    ],
    projects: [
      { title: 'CI/CD Pipeline for a Sample App', difficulty: 'Beginner' },
      { title: 'Containerized Microservices Deployment', difficulty: 'Intermediate' },
      { title: 'Full Kubernetes Cluster with Monitoring', difficulty: 'Advanced' },
    ],
    certificates: [
      { name: 'Certified Kubernetes Administrator (CKA)', provider: 'CNCF' },
      { name: 'Docker Certified Associate', provider: 'Docker' },
    ],
  },
  {
    id: 'android-developer',
    title: 'Android Developer',
    category: 'Mobile',
    icon: '📱',
    color: 'from-violet-500 to-amber-500',
    tagline: 'Build apps for billions of Android devices.',
    description:
      'Android developers design and build mobile applications using Kotlin and modern Android frameworks, delivering smooth, native user experiences.',
    duration: '5–7 months',
    salary: { entry: '₹4.5 LPA', mid: '₹11 LPA', senior: '₹24 LPA+' },
    skills: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'REST APIs', 'Room Database', 'Material Design'],
    levels: [
      {
        level: 'Beginner',
        duration: '5 weeks',
        topics: [
          t('Kotlin Fundamentals', 'Syntax, OOP, coroutines basics.'),
          t('Android Studio & SDK', 'Project structure, emulator setup.'),
          t('UI Basics', 'Views, layouts, Material Design.'),
        ],
      },
      {
        level: 'Intermediate',
        duration: '8 weeks',
        topics: [
          t('Jetpack Compose', 'Declarative UI building blocks.'),
          t('Navigation & Architecture', 'MVVM pattern, ViewModel, LiveData.'),
          t('Networking', 'Retrofit for REST API calls.'),
          t('Local Storage', 'Room database & DataStore.'),
        ],
      },
      {
        level: 'Advanced',
        duration: '7 weeks',
        topics: [
          t('Dependency Injection', 'Hilt for scalable architecture.'),
          t('Testing', 'Unit & UI testing with Espresso.'),
          t('App Performance', 'Profiling, memory & battery optimization.'),
          t('Publishing to Play Store', 'Signing, release builds, store listing.'),
        ],
      },
    ],
    resources: [
      { title: 'Android Developers — Official Docs', type: 'Documentation' },
      { title: 'Kotlin Bootcamp for Programmers', type: 'Course' },
      { title: 'Jetpack Compose Pathway', type: 'Course' },
    ],
    projects: [
      { title: 'To-Do List App with Room', difficulty: 'Beginner' },
      { title: 'Weather App with REST API', difficulty: 'Intermediate' },
      { title: 'Full E-commerce Android App', difficulty: 'Advanced' },
    ],
    certificates: [
      { name: 'Associate Android Developer', provider: 'Google' },
      { name: 'Android Kotlin Developer', provider: 'Meta / Coursera' },
    ],
  },
]

export const getRoadmapById = (id) => roadmaps.find((r) => r.id === id)

export const getTotalTopics = (roadmap) =>
  roadmap.levels.reduce((sum, lvl) => sum + lvl.topics.length, 0)
