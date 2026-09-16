export interface SubCard {
  title: string
  blurb: string
  includes: string[]
  tools?: string[]
  bestFor?: string
}

export interface TechItem {
  name: string
  category: string
  desc: string
}

export interface ServiceData {
  slug: string
  n: string
  title: string
  short: string
  tagline: string
  desc: string
  bg: string
  text: string
  accent: string
  muted: string
  tags: string[]
  subCards: SubCard[]
  techStack?: TechItem[]
}

export const servicesData: ServiceData[] = [
  {
    slug: 'design-brand-experience',
    n: '01',
    title: 'Design & Brand Experience',
    short: 'UI/UX & Brand Craft',
    tagline: 'Design that makes your product feel trustworthy from the first click.',
    desc: 'From interfaces to identity, we design experiences that look professional and convert visitors into customers.',
    bg: '#000000',
    text: '#F6F4F1',
    accent: '#F95C4B',
    muted: 'rgba(246,244,241,0.65)',
    tags: ['UI/UX Design', 'Branding', 'Graphic Design', 'Motion & 3D', 'Design Systems'],
    subCards: [
      {
        title: 'UI / UX Design',
        blurb: 'Wireframes to polished, user-tested interfaces.',
        includes: [
          'User research & persona mapping',
          'Interactive wireframing',
          'High-fidelity prototyping (Figma)',
          'Usability testing & iteration',
          'Design systems & component libraries',
        ],
        tools: ['Figma', 'Adobe XD', 'Protopie'],
        bestFor: 'SaaS products, web applications, client digital platforms.',
      },
      {
        title: 'Branding & Visual Identity',
        blurb: 'Logos, color systems, and brand guidelines that stick.',
        includes: [
          'Logo design & brand mark creation',
          'Comprehensive brand guidelines',
          'Color palette & typography systems',
          'Brand voice & messaging framework',
        ],
        tools: ['Illustrator', 'Figma', 'Indesign'],
        bestFor: 'Startups launching or established businesses rebranding.',
      },
      {
        title: 'Graphic Design',
        blurb: 'Marketing-ready visuals for print and digital channels.',
        includes: [
          'Social media creative assets',
          'Investor pitch decks & presentations',
          'Digital banners & ad visuals',
          'Packaging & print collateral',
        ],
        tools: ['Photoshop', 'Illustrator', 'Figma'],
        bestFor: 'Marketing campaigns, launches, and investor fundraising.',
      },
      {
        title: 'Motion Design & 3D Graphics',
        blurb: 'Engaging micro-interactions, explainer animations, and 3D visual assets.',
        includes: [
          'UI micro-animations & transitions',
          '3D product renders & mockups',
          'Explainer motion graphics',
          'Lottie animations for web/mobile',
        ],
        tools: ['After Effects', 'Blender', 'Lottie', 'Spline'],
        bestFor: 'Landing pages, app onboarding, and interactive web experiences.',
      },
      {
        title: 'Design Audits & UX Optimization',
        blurb: 'Identify friction points in your current product and unlock higher conversion rates.',
        includes: [
          'Heuristic UX evaluation',
          'Conversion rate optimization (CRO) audit',
          'Accessibility compliance check (WCAG)',
          'Actionable redesign roadmap',
        ],
        bestFor: 'Existing products with drop-off issues or outdated interfaces.',
      },
    ],
  },
  {
    slug: 'web-app-development',
    n: '02',
    title: 'Full Stack Web Development',
    short: 'Full-Stack & Mobile',
    tagline: 'Custom-built, scalable software — from your first user to your millionth.',
    desc: 'Full-stack web and mobile development, built with production-grade architecture, not templates.',
    bg: '#F95C4B',
    text: '#000000',
    accent: '#000000',
    muted: 'rgba(0,0,0,0.7)',
    tags: ['Next.js', 'React Native', 'Full-Stack', 'Node.js', 'AI-Integrated Apps'],
    subCards: [
      {
        title: 'Custom Web Development',
        blurb: 'Business websites and landing pages built to convert.',
        includes: [
          'Responsive design for all viewports',
          'Headless CMS integration',
          'Performance & Speed optimization (100 Lighthouse)',
          'SEO-ready semantic markup',
        ],
        tools: ['React / Next.js', 'Node.js', 'Tailwind CSS', 'WordPress (where appropriate)'],
        bestFor: 'Marketing sites, corporate portals, product landing pages.',
      },
      {
        title: 'Web Application Development (Full-Stack)',
        blurb: 'SaaS platforms and internal tools, built end-to-end.',
        includes: [
          'Frontend + backend architecture',
          'Relational & NoSQL database design',
          'RESTful & GraphQL API development',
          'Authentication & permission systems',
        ],
        tools: ['React / Next.js', 'Node.js / Python Django / Laravel', 'PostgreSQL / MongoDB / Redis'],
        bestFor: 'SaaS startups, enterprise portals, custom management software.',
      },
      {
        title: 'Mobile App Development',
        blurb: 'Cross-platform and native apps for iOS and Android.',
        includes: [
          'Native UI component implementation',
          'Backend API integration & offline sync',
          'App Store & Play Store deployment',
          'Push notifications & analytics',
        ],
        tools: ['React Native / Flutter (Cross-platform)', 'Swift / Kotlin (Native)'],
        bestFor: 'Consumer apps, field agent tools, mobile-first SaaS products.',
      },
      {
        title: 'AI-Integrated Product Development',
        blurb: 'Web/mobile apps with smart features baked in — not bolted on.',
        includes: [
          'Embedding personalized recommendation engines',
          'In-app conversational AI & chat assistants',
          'Predictive analytics features in core product workflows',
          'Intelligent search & automated data extraction',
        ],
        bestFor: 'Clients who want a standard product, but where AI will 10x user value.',
      },
    ],
  },
  {
    slug: 'ai-intelligent-data-solutions',
    n: '03',
    title: 'AI & Intelligent Data Solutions',
    short: 'ML, LLMs & Agents',
    tagline: 'AI that solves real business problems — not a chatbot demo.',
    desc: 'From dashboards to custom deep learning models to autonomous AI agents, we build production AI systems, backed by hands-on ML research and engineering experience.',
    bg: '#E4DED2',
    text: '#000000',
    accent: '#F95C4B',
    muted: 'rgba(0,0,0,0.65)',
    tags: ['Deep Learning', 'RAG Pipelines', 'AI Agents', 'LLMs', 'Computer Vision'],
    subCards: [
      {
        title: 'Data Analysis & Business Dashboards',
        blurb: 'Turn raw business data into actionable decisions.',
        includes: [
          'Data cleaning & ETL pipeline building',
          'Real-time KPI dashboard development',
          'Automated executive reporting',
        ],
        tools: ['Python (Pandas / NumPy)', 'Power BI / Tableau', 'SQL / Snowflake'],
        bestFor: 'Companies with under-utilized data needing executive clarity.',
      },
      {
        title: 'Machine Learning & Deep Learning',
        blurb: 'Predictive models trained on your data, not generic APIs.',
        includes: [
          'Business metrics forecasting',
          'Multi-class classification models',
          'Real-time anomaly detection',
          'Custom model training & deployment pipelines',
        ],
        tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow'],
        bestFor: 'Fintech, healthtech, and logistics needing custom predictive intelligence.',
      },
      {
        title: 'NLP & Computer Vision',
        blurb: 'Systems that read text and "see" images/video like a human.',
        includes: [
          'Text classification & automated summarization',
          'Sentiment analysis & intent recognition',
          'Object detection & video tracking',
          'Optical Character Recognition (OCR) document processing',
        ],
        tools: ['HuggingFace Transformers', 'spaCy', 'OpenCV', 'YOLOv8'],
        bestFor: 'Document processing, security, media analysis, quality control.',
      },
      {
        title: 'Generative AI & Agentic AI',
        blurb: 'AI that creates content or takes autonomous action on your workflows.',
        includes: [
          'Custom LLM-powered applications',
          'Retrieval-Augmented Generation (RAG) systems',
          'Multi-step AI agents that execute complex business tasks',
          'Fine-tuned open source models (Llama, Mistral)',
        ],
        tools: ['OpenAI / Anthropic APIs', 'LangChain / LangGraph', 'Vector DBs (Pinecone, Chroma, Qdrant)'],
        bestFor: 'Organizations automating complex knowledge worker workflows.',
      },
      {
        title: 'AI Automation for Business',
        blurb: 'Recommendation engines, prediction tools, and chatbots that plug into your existing operations.',
        includes: [
          'Personalized product recommenders',
          'Customer churn prediction models',
          'Automated customer support AI assistants',
          'Operational workflow automation',
        ],
        bestFor: 'E-commerce, SaaS, and customer service teams scaling operations.',
      },
    ],
    techStack: [
      { name: 'PyTorch / TensorFlow', category: 'Deep Learning', desc: 'Core frameworks for custom neural networks and ML model training.' },
      { name: 'LangChain & LangGraph', category: 'Agentic Frameworks', desc: 'Orchestrator for complex multi-agent stateful AI workflows.' },
      { name: 'Pinecone / Chroma / Qdrant', category: 'Vector Databases', desc: 'High-speed vector indexing for RAG knowledge retrieval.' },
      { name: 'HuggingFace & Transformers', category: 'NLP Frameworks', desc: 'Pre-trained and custom LLMs, embeddings, and vision transformers.' },
      { name: 'OpenCV & YOLOv8', category: 'Computer Vision', desc: 'Real-time image segmentation, object detection, and tracking.' },
      { name: 'FastAPI & Ray Serve', category: 'Model Deployment', desc: 'High-throughput, low-latency microservices for model inference.' },
    ],
  },
  {
    slug: 'cloud-devops-engineering',
    n: '04',
    title: 'Cloud & DevOps Engineering',
    short: 'Infrastructure & CI/CD',
    tagline: 'Infrastructure that scales quietly in the background.',
    desc: 'We set up, secure, and automate the cloud infrastructure your product runs on.',
    bg: '#000000',
    text: '#F6F4F1',
    accent: '#F95C4B',
    muted: 'rgba(246,244,241,0.65)',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'CI/CD Pipelines'],
    subCards: [
      {
        title: 'AWS Cloud Infrastructure Setup',
        blurb: 'Production-ready infrastructure on AWS from day one.',
        includes: [
          'EC2, S3, RDS & ElastiCache setup',
          'VPC networking & security groups',
          'IAM security policies & compliance',
          'Cloud cost optimization & auditing',
        ],
        tools: ['AWS', 'GCP', 'Terraform'],
        bestFor: 'New projects and growing platforms needing scalable foundations.',
      },
      {
        title: 'Application Containerization',
        blurb: 'Package your app so it runs anywhere, reliably.',
        includes: [
          'Docker containerization of legacy & modern apps',
          'Kubernetes cluster orchestration (EKS/GKE)',
          'Microservices architecture implementation',
        ],
        tools: ['Docker', 'Kubernetes', 'Helm'],
        bestFor: 'Teams moving from monolithic systems to microservices.',
      },
      {
        title: 'Cloud Migration',
        blurb: 'Move existing systems to the cloud without downtime.',
        includes: [
          'Comprehensive migration assessment & roadmap',
          'Zero-downtime data transfer strategies',
          'Staging environment validation & load testing',
          'Automated rollback plan execution',
        ],
        bestFor: 'On-premise infrastructure transitioning to cloud native.',
      },
      {
        title: 'CI/CD Pipelines & Deployment',
        blurb: 'Ship code automatically, safely, every time.',
        includes: [
          'Automated build, test, and release pipelines',
          'Staging & production environment isolation',
          'Automated canary & blue/green deployments',
          'Instant rollback automation',
        ],
        tools: ['GitHub Actions', 'Jenkins', 'Docker', 'AWS CodePipeline'],
        bestFor: 'Engineering teams looking to accelerate shipping velocity.',
      },
    ],
  },
  {
    slug: 'digital-marketing-seo-growth',
    n: '05',
    title: 'Digital Marketing & SEO Growth',
    short: 'SEO, Content & PPC',
    tagline: 'Get found, get traffic, get customers.',
    desc: 'Search visibility, content, and paid campaigns that bring the right people to your product.',
    bg: '#F95C4B',
    text: '#000000',
    accent: '#000000',
    muted: 'rgba(0,0,0,0.7)',
    tags: ['Technical SEO', 'Content Strategy', 'PPC Campaigns', 'AI Marketing Analytics'],
    subCards: [
      {
        title: 'Search Engine Optimization (SEO)',
        blurb: 'Rank higher, organically.',
        includes: [
          'Comprehensive technical SEO audit',
          'On-page content & meta optimization',
          'High-intent keyword research strategy',
          'Authority backlink building outreach',
        ],
        tools: ['Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Search Console'],
        bestFor: 'Businesses looking for compounding organic customer acquisition.',
      },
      {
        title: 'Content Marketing',
        blurb: 'Content that ranks and builds trust.',
        includes: [
          'Thought leadership blog strategy',
          'SEO-optimized article writing',
          'Content distribution & editorial calendars',
        ],
        bestFor: 'B2B SaaS, consultancies, and knowledge-driven brands.',
      },
      {
        title: 'Paid Acquisition (PPC)',
        blurb: 'Paid campaigns that don’t burn budget.',
        includes: [
          'Google Search & Display Ads management',
          'Meta (Facebook/Instagram) & LinkedIn Ads',
          'Continuous ad creative optimization',
          'Conversion tracking & attribution setup',
        ],
        bestFor: 'Brands looking for immediate sales or lead generation.',
      },
      {
        title: 'AI-Powered Marketing Analytics',
        blurb: 'Predictive insights on what campaigns will actually work.',
        includes: [
          'Machine learning ad performance prediction',
          'AI-driven audience segmentation',
          'Automated multi-channel reporting dashboards',
        ],
        bestFor: 'Growth teams needing precise data-driven ad spend allocation.',
      },
    ],
  },
  {
    slug: 'ecommerce-solutions',
    n: '06',
    title: 'E-commerce Solutions',
    short: 'Shopify & WooCommerce',
    tagline: 'Online stores built to sell, not just look good.',
    desc: 'Shopify and WordPress builds, customized and integrated with the tools your store actually needs.',
    bg: '#E4DED2',
    text: '#000000',
    accent: '#F95C4B',
    muted: 'rgba(0,0,0,0.65)',
    tags: ['Shopify Custom', 'WooCommerce', 'Payment Integrations', 'AI Personalization'],
    subCards: [
      {
        title: 'Shopify Store Development',
        blurb: 'Custom Shopify stores, themes, and apps.',
        includes: [
          'Complete store setup & configuration',
          'Custom liquid theme development',
          'Shopify app integrations & extensions',
          'Checkout & conversion rate optimization',
        ],
        tools: ['Shopify Liquid', 'Hydrogen (Headless)', 'GraphQL'],
        bestFor: 'D2C brands and retailers seeking bespoke storefronts.',
      },
      {
        title: 'WordPress / WooCommerce Development',
        blurb: 'Flexible, content-driven online stores.',
        includes: [
          'WooCommerce platform setup',
          'Custom plugin development',
          'Bespoke theme design & implementation',
        ],
        tools: ['WordPress', 'WooCommerce', 'PHP', 'Tailwind'],
        bestFor: 'Content-rich e-commerce brands needing full code ownership.',
      },
      {
        title: 'Store Customization & Integrations',
        blurb: 'Payment gateways, shipping, inventory — all connected.',
        includes: [
          'Global payment gateway integration (Stripe, PayPal, Local)',
          'Automated shipping calculator & carrier APIs',
          'ERP & inventory management synchronization',
        ],
        bestFor: 'Growing stores streamlining backend operations.',
      },
      {
        title: 'AI-Powered Personalization',
        blurb: 'Product recommendations and search that adapt to each shopper.',
        includes: [
          'ML product recommendation engines',
          'Personalized search & category ranking',
          'Cart abandonment predictive triggers',
        ],
        bestFor: 'E-commerce stores aiming to increase Average Order Value (AOV).',
      },
    ],
  },
  {
    slug: 'ai-automation-agentic-ai',
    n: '07',
    title: 'AI Automation & Agentic AI',
    short: 'Agents & Automation',
    tagline: 'Autonomous AI that does the heavy lifting for your business.',
    desc: 'We build multi-step AI agents and automated workflows that handle complex tasks, generate content, and integrate directly with your existing operations.',
    bg: '#000000',
    text: '#F6F4F1',
    accent: '#F95C4B',
    muted: 'rgba(246,244,241,0.65)',
    tags: ['AI Agents', 'RAG Systems', 'Workflow Automation', 'LLMs', 'Chatbots'],
    subCards: [
      {
        title: 'Generative AI & LLM Applications',
        blurb: 'Custom AI applications built around powerful language models.',
        includes: [
          'Custom LLM application development',
          'Retrieval-Augmented Generation (RAG)',
          'Knowledge base chat interfaces',
          'Automated content & report generation',
        ],
        tools: ['OpenAI API', 'Anthropic Claude', 'LangChain', 'Pinecone'],
        bestFor: 'Knowledge-heavy organizations needing instant access to internal data.',
      },
      {
        title: 'Autonomous AI Agents',
        blurb: 'AI systems that act independently to solve multi-step problems.',
        includes: [
          'Multi-agent workflow orchestration',
          'Tool-using AI agents (API integrations)',
          'Autonomous research & summarization bots',
          'Self-correcting AI reasoning loops',
        ],
        tools: ['LangGraph', 'AutoGPT frameworks', 'Python'],
        bestFor: 'Companies looking to fully automate complex digital tasks.',
      },
      {
        title: 'Business Process Automation',
        blurb: 'Connect your apps and let AI handle the repetitive work.',
        includes: [
          'AI-powered Zapier/Make integrations',
          'Automated data entry & extraction',
          'Intelligent email triage & drafting',
          'CRM data enrichment',
        ],
        tools: ['Make', 'Zapier', 'OpenAI', 'Custom Webhooks'],
        bestFor: 'Sales, HR, and operations teams drowning in repetitive tasks.',
      },
      {
        title: 'Customer Support AI',
        blurb: '24/7 intelligent agents that resolve tickets, not just deflect them.',
        includes: [
          'Context-aware support chatbots',
          'Automated ticket routing & tagging',
          'Helpdesk API integrations (Zendesk, Intercom)',
          'Multilingual support systems',
        ],
        tools: ['Voiceflow', 'Botpress', 'Custom LLM APIs'],
        bestFor: 'E-commerce and SaaS companies scaling their support teams.',
      }
    ],
    techStack: [
      { name: 'LangChain & LangGraph', category: 'Agentic Frameworks', desc: 'Orchestrator for complex multi-agent stateful AI workflows.' },
      { name: 'OpenAI & Anthropic', category: 'Foundation Models', desc: 'State-of-the-art reasoning and generative models.' },
      { name: 'Pinecone & Qdrant', category: 'Vector Databases', desc: 'High-speed vector indexing for RAG knowledge retrieval.' }
    ]
  }
]

