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
    slug: 'ncdg',
    index: '01',
    title: 'NCDG',
    category: 'Real Estate Management',
    year: '2024',
    image: '/work/NCDG.png',
    summary:
      'A centralized real estate and property management platform built to streamline property operations across multiple U.S. states.',
    overview:
      'The platform was designed around a structured owner-property-unit-tenant hierarchy, providing centralized operational and financial visibility while automating repetitive property management workflows.',
    requirement:
      'Bring property owners, properties, units, tenants, leases, billing, maintenance, compliance, and reporting into a unified digital platform.',
    challenges: [
      'Multi-state property management architecture.',
      'Automated recurring rent and late-fee billing.',
      'AI-assisted payment risk monitoring.',
    ],
    solutions: [
      'Centralized operational and financial visibility.',
      'Automating repetitive property management workflows.',
      'Predictive flags for potential late payments.',
    ],
    features: [
      'Property owner and portfolio management',
      'Property, unit, and occupancy tracking',
      'Tenant and lease management',
      'Automated recurring rent and late-fee billing',
      'Tenant ledgers and payment tracking',
      'Maintenance and work-order management',
      'Maintenance scheduling and vendor cost tracking',
      'AI-assisted payment risk monitoring',
      'Predictive flags for potential late payments and maintenance bottlenecks',
      'Automated legal and compliance notice generation',
      'Centralized financial and operational reporting',
      'Portfolio-level analytics and insights',
      'Multi-state property management architecture',
      'Role-based operational workflows',
    ],
    results: [
      { value: 'AI', label: 'Risk Monitoring' },
      { value: 'SaaS', label: 'Architecture' },
      { value: 'Automated', label: 'Workflows' },
    ],
    stack: [
      'Full-Stack Web Development',
      'AI Integration',
      'Property Management Systems',
      'Financial Automation',
      'Predictive Analytics',
      'Workflow Automation',
      'Payment Systems',
      'REST APIs',
      'Database Architecture',
      'Reporting Dashboards',
      'Role-Based Access Control',
      'Scalable SaaS Architecture',
    ],
  },
  {
    slug: 'alyve',
    index: '02',
    title: 'ALYVE',
    category: 'Health & Wellness',
    year: '2024',
    image: '/work/alyve.png',
    summary:
      'A personalized health and wellness e-commerce platform built on Shopify, connecting health assessments and nutritional insights with tailored vitamin and supplement recommendations.',
    overview:
      'The platform was designed to simplify the customer journey from health assessment to personalized recommendations and purchase, while maintaining a fast, responsive, and conversion-focused storefront.',
    requirement:
      'Connect health assessments and nutritional insights with tailored vitamin and supplement recommendations.',
    challenges: [
      'Optimized quiz-to-checkout customer journey.',
      'Dynamic product recommendation interface.',
      'Performance-optimized storefront assets.',
    ],
    solutions: [
      'Interactive health quiz and personalization flow.',
      'Blood testing and results experience.',
      'Personalized supplement recommendations.',
    ],
    features: [
      'Interactive health quiz and personalization flow',
      'Blood testing and results experience',
      'Personalized supplement recommendations',
      'Dynamic health insights and content rendering',
      'Custom Shopify theme components',
      'Conversion-focused product pages',
      'Mobile-first responsive storefront',
      'Optimized quiz-to-checkout customer journey',
      'Dynamic product recommendation interface',
      'Performance-optimized storefront assets',
      'Streamlined Shopify checkout experience',
    ],
    results: [
      { value: 'Shopify', label: 'Custom Theme' },
      { value: 'Dynamic', label: 'Recommendations' },
      { value: 'Mobile', label: 'Optimized' },
    ],
    stack: [
      'Shopify',
      'Custom Theme Development',
      'E-commerce Development',
      'JavaScript',
      'Responsive UI/UX',
      'Dynamic Content',
      'Product Recommendation Systems',
      'Mobile Optimization',
      'Performance Optimization',
      'Conversion-Focused Design',
      'Frontend Development',
    ],
  },
  {
    slug: 'sanso',
    index: '03',
    title: 'NexaTech-Sanso',
    category: 'E-Commerce',
    year: '2024',
    image: '/work/nexatech-sanso.png',
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
  },
  {
    slug: 'groweo',
    index: '04',
    title: 'Groweo',
    category: 'SaaS Platform & AI',
    year: '2024',
    image: '/work/groweo.png',
    summary:
      'A SaaS platform designed to transform static websites into automated growth engines through real-time visitor engagement and AI-driven workflows.',
    overview:
      'Groweo is a powerful growth and automation platform. I contributed to the core platform architecture and automation systems that capture visitor behavior, process engagement events, and trigger configurable workflows seamlessly across multiple client websites.',
    requirement:
      'Design and build a scalable, multi-tenant SaaS architecture capable of real-time event processing, interactive engagement, and complex AI automation.',
    challenges: [
      'Architecting a scalable event-processing system for real-time visitor tracking.',
      'Building a flexible workflow and automation engine that supports complex logic.',
      'Ensuring seamless, lightweight integration across multiple client websites without impacting performance.',
    ],
    solutions: [
      'Developed a performance-focused backend system to handle high-throughput event processing.',
      'Created an intuitive workflow builder to orchestrate AI-driven engagement and lead capture.',
      'Implemented centralized analytics and reporting for unified client management.',
    ],
    features: [
      'Real-time visitor tracking and behavioral analytics',
      'AI-driven engagement and automation workflows',
      'Interactive engagement widgets',
      'Workflow and automation builder',
      'Lead capture and conversion tools',
      'Centralized analytics and reporting dashboard',
      'Multi-client website integration',
    ],
    results: [
      { value: 'AI', label: 'Driven Workflows' },
      { value: 'SaaS', label: 'Automation Engine' },
      { value: 'Real-time', label: 'Event Processing' },
    ],
    stack: ['SaaS Architecture', 'Real-Time APIs', 'AI Automation', 'Database Management', 'Workflow Engineering'],
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
  },
  {
    slug: 'radisist',
    index: '06',
    title: 'Radisist',
    category: 'Healthcare & AI',
    year: '2025',
    image: '/work/radisist.png',
    website: 'https://radisist.com',
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
