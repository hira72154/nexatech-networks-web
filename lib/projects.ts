export type Project = {
  slug: string
  index: string
  title: string
  category: string
  year: string
  image: string
  summary: string
  overview: string
  requirement: string
  challenges: string[]
  solutions: string[]
  features: string[]
  results: { value: string; label: string }[]
  stack: string[]
  website?: string
}

export const projects: Project[] = [
  {
    slug: 'rapidstart',
    index: '01',
    title: 'RAPIDSTART',
    category: 'AI Automation Platform',
    year: '2025',
    image: '/work/rapidstart.png',
    summary: 'An AI business automation platform that turns a business idea into a guided, automated launch workflow.',
    overview: "RapidStart helps founders move from idea to operating business through API-driven product workflows backed by AI. The platform combines structured business logic with LLM-powered automation and retrieval, so guidance and generated output stay grounded in the user's actual business context rather than generic model responses.",
    requirement: "Build a production platform where AI output is structured, context-aware and safely integrated into product workflows.",
    challenges: [
      "Business launch guidance is high-context work.",
      "A generic chatbot can't answer well as useful answers depend on user's own data and stage.",
      "The platform needed AI output that was structured, reliable and connected to real application state."
    ],
    solutions: [
      "Backend services and AI-powered automation workflows across the product.",
      "Retrieval-backed functionality using embeddings and PostgreSQL/pgvector for context.",
      "Agentic workflows built with LangChain and LangGraph handled structured outputs.",
      "Long-running AI operations ran as background pipelines with retry and failure handling."
    ],
    features: [
      "API-driven product workflows",
      "LLM-powered automation and retrieval",
      "Agentic workflows with LangChain and LangGraph",
      "Background pipelines with retry and failure handling",
      "CI/CD deployment through GitHub Actions"
    ],
    results: [
      { value: 'AI', label: 'Automation' },
      { value: 'RAG', label: 'Retrieval' },
      { value: 'LLM', label: 'Integration' }
    ],
    stack: ['Python', 'Django REST Framework', 'FastAPI', 'Next.js', 'NestJS', 'PostgreSQL', 'pgvector', 'LangChain', 'LangGraph', 'RAG', 'AWS', 'LLM APIs'],
    website: 'https://rapidstart.net/'
  },
  {
    slug: 'pcm-savings',
    index: '02',
    title: 'PCM SAVINGS',
    category: 'Healthcare Platform',
    year: '2024',
    image: '/work/pcmsavings.png',
    summary: 'An enterprise healthcare benefits platform for prescription care management.',
    overview: 'PCM Savings delivers prescription care management for enterprise healthcare clients. The work covered backend services, REST APIs and reporting features supporting high-volume healthcare data and the operational modules teams rely on day to day.',
    requirement: 'Ensure modules stay fast and accurate under enterprise data volumes while remaining maintainable as requirements changed.',
    challenges: [
      'Healthcare benefits data is large, sensitive and reporting-heavy.',
      'Modules had to stay fast and accurate under enterprise data volumes while remaining maintainable as requirements changed.'
    ],
    solutions: [
      'Development and enhancement of enterprise healthcare modules, REST API endpoints and backend services.',
      'Reporting features built on PostgreSQL and ClickHouse for analytical queries.',
      'Frontend features in React.js consumed those APIs and surfaced the data to end users.'
    ],
    features: [
      'Enterprise healthcare modules',
      'REST API endpoints and backend services',
      'Reporting features for analytical queries',
      'Frontend integration with React.js'
    ],
    results: [
      { value: 'FastAPI', label: 'Backend' },
      { value: 'React.js', label: 'Frontend' },
      { value: 'ClickHouse', label: 'Analytics' }
    ],
    stack: ['FastAPI', 'React.js', 'Node.js', 'ClickHouse', 'PostgreSQL'],
    website: 'https://www.pcmsavings.com/'
  },
  {
    slug: 'vivup',
    index: '03',
    title: 'VIVUP',
    category: 'Employee Benefits Platform',
    year: '2023',
    image: '/work/vivup.png',
    summary: 'A UK-based employee benefits platform serving large organisations and their workforces.',
    overview: 'Vivup provides employee benefits, wellbeing and salary-sacrifice schemes to UK employers. The work focused on feature development, backend enhancements, performance improvements and production support on an established, high-traffic codebase.',
    requirement: 'Deliver features and backend enhancements on a mature multi-service platform without destabilising existing workflows.',
    challenges: [
      'A mature multi-service platform with real users.',
      'New features had to land without destabilising existing workflows.',
      'Slow paths had to be found and fixed in a live system.'
    ],
    solutions: [
      'Feature development and backend enhancements across the Rails application and supporting services.',
      'Database and query-level performance improvements in PostgreSQL.',
      'Ongoing production support including investigation and resolution of live issues.'
    ],
    features: [
      'Employee benefits, wellbeing and salary-sacrifice schemes',
      'Feature development and backend enhancements',
      'Database and query-level performance improvements',
      'Production support and live issue resolution'
    ],
    results: [
      { value: 'Rails', label: 'Backend' },
      { value: 'React.js', label: 'Frontend' },
      { value: 'PostgreSQL', label: 'Database' }
    ],
    stack: ['Ruby on Rails', 'React.js', 'Node.js', 'Go', 'PostgreSQL'],
    website: 'https://vivup.co.uk/'
  },
  {
    slug: 'sanso',
    index: '04',
    title: 'nexatechsanso',
    category: 'E-Commerce',
    year: '2024',
    image: '/work/nexatechsanso.png',
    summary:
      'A premium consumer electronics e-commerce platform specializing in German-engineered wireless audio and power solutions.',
    overview:
      'The platform was designed to combine premium product presentation with a smooth customer journey, from account creation and product discovery to cart management and checkout.',
    requirement:
      'Create a modern, performance-focused shopping experience for headphones, earbuds, and other everyday audio products.',
    challenges: [
      'Premium product presentation with a smooth customer journey.',
      'Account creation and product discovery.',
      'Cart management and checkout.',
    ],
    solutions: [
      'Secure user authentication.',
      'Product search and discovery.',
      'Responsive mobile-first design.',
    ],
    features: [
      'Premium headphone and wireless audio storefront',
      'Product categories and detailed product pages',
      'Product search and discovery',
      'Customer registration and login',
      'Secure user authentication',
      'Customer account and profile management',
      'Shopping cart and checkout workflow',
      'Product pricing and availability management',
      'Order management and order history',
      'Responsive mobile-first design',
      'Modern product-focused UI/UX',
      'Admin/product management capabilities',
      'Optimized shopping and conversion flow',
    ],
    results: [
      { value: 'Audio', label: 'Storefront' },
      { value: 'UX', label: 'Optimized Flow' },
      { value: 'E-commerce', label: 'Platform' },
    ],
    stack: [
      'React.js',
      'JavaScript',
      'REST APIs',
      'Database Management',
      'Authentication & Authorization',
      'Shopping Cart Systems',
      'Order Management',
    ],
    website: 'https://nexatech-sanso.com/',
  },
  {
    slug: 'waytoprime',
    index: '05',
    title: 'Waytoprime',
    category: 'EdTech Platform',
    year: '2025',
    image: '/work/waytoprime.png',
    summary:
      'A complete full-stack learning management platform built around a comprehensive online course.',
    overview:
      'WaytoPrime provides students with a structured learning experience while giving administrators powerful tools to manage users, course content, assignments, submissions, payments, and platform activity. The platform was developed as a complete end-to-end system.',
    requirement:
      'Develop a secure, end-to-end system covering frontend and backend architecture, authentication, role-based access, payment processing, file handling, and administrative management.',
    challenges: [
      'Managing complex role-based access for students and administrators securely.',
      'Integrating robust payment gateways for course enrollment and subscriptions.',
      'Handling diverse file uploads, assignment submissions, and data extraction workflows.',
    ],
    solutions: [
      'Dedicated dashboard interfaces tailored for students and administrators.',
      'A scalable backend API architecture for database-driven course and assignment management.',
      'Secure, robust authentication and Python-based processing pipelines.',
    ],
    features: [
      'Complete online course and learning management system',
      'Student registration and profile management',
      'Role-based access control with separate dashboards',
      'Assignment creation, submission, and file uploads',
      'Student submission tracking and evaluation workflows',
      'Payment gateway integration for course enrollment',
      'Admin-controlled course and platform management',
      'Python-based data extraction/processing workflows',
    ],
    results: [
      { value: 'E2E', label: 'Platform Built' },
      { value: 'Auth', label: 'Role-Based Access' },
      { value: 'API', label: 'Backend Architecture' },
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'HTML5/CSS3', 'REST APIs'],
    website: 'https://www.waytoprime.com/',
  },
  {
    slug: 'radisist',
    index: '06',
    title: 'Radisist',
    category: 'Healthcare & AI',
    year: '2025',
    image: '/work/radisist.png',
    website: 'https://radisist.com/',
    summary:
      'An AI-assisted mammography platform designed to support radiologists in the detection and analysis of breast abnormalities.',
    overview:
      'Radisist combines deep learning, computer vision, explainable AI, and a radiologist-in-the-loop workflow to transform mammogram images into actionable preliminary insights. The platform enables secure patient image uploads, AI-powered mammogram analysis, automated preliminary reporting, radiologist review, and visual explanations.',
    requirement:
      'Integrate multiple state-of-the-art deep learning architectures and an ensemble-based approach to improve diagnostic performance, while providing suspicious-region segmentation.',
    challenges: [
      'Integrating multiple deep learning architectures into an ensemble.',
      'Providing explainable predictions that radiologists can trust.',
      'Ensuring secure processing and management of sensitive mammography images.',
    ],
    solutions: [
      'Multi-model and ensemble AI architecture for robust classification.',
      'Connected-UNet with ASPP for suspicious-region segmentation.',
      'Grad-CAM heatmaps for visual explanations of AI predictions.',
    ],
    features: [
      'AI-powered mammogram classification and analysis',
      'Automated preliminary diagnostic reports',
      'Radiologist review and validation workflow',
      'Grad-CAM heatmaps for explainable predictions',
      'Multi-model and ensemble AI architecture',
      'Suspicious lesion segmentation',
      'Patient and diagnostic record management',
      'Secure mammography image processing',
    ],
    results: [
      { value: 'AI', label: 'Assisted Analysis' },
      { value: 'Grad-CAM', label: 'Explainable AI' },
      { value: 'UNet', label: 'Segmentation' },
    ],
    stack: ['Next.js', 'Django', 'Python', 'PostgreSQL', 'PyTorch', 'Computer Vision', 'Grad-CAM', 'Nginx', 'Gunicorn'],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
