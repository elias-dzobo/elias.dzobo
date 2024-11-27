import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Elias Dzobo",
  initials: "ED",
  location: "Accra, Ghana, UTC",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "AI/ML Engineer building user centred applications | Backend Developer",
  summary:
    "As an AI/ML Engineer, i have experience turning business objectives into ML tasks that can be modeled and solved using data driven approaches to produce models in production that can generate value. I also have experience working with data and data pipelines as well as the entire machine learning operations lifecycle.",
  avatarUrl: "../../public/avatar.jpg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "elias.dzobo@gmail.com",
    tel: "+233200770570",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/elias-dzobo",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/eliasdzobo",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/elias_dzobo",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Ashesi University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "4th-IR",
      link: "https://www.4th-ir.com/",
      badges: ["Hybrid"],
      title: "AI/ML Engineer",
      logo: ParabolLogo,
      start: "2023",
      end: "Present",
      description:
        "Lead a team of 6 individuals in the development of a LangChain-based recommendation system, leveraging large language models to significantly improve candidate-to-job role matching accuracy by 85%. Technologies: Langchain, OpenAI, FastAPI",
    },
    {
      company: "Merson Venture Studios",
      link: "https://www.4th-ir.com/",
      badges: ["Hybrid"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "2023",
      end: "Present",
      description:
        "Collaborated with a cross functional team to develop a blockchain tokenization service using a microsrvice architecture",
    },
    {
      company: "Inngen Technologies",
      link: "https://www.4th-ir.com/",
      badges: ["Hybrid"],
      title: "Data Engineer",
      logo: ParabolLogo,
      start: "2024",
      end: "2024",
      description:
        "Developed ETL pipelines by identifying data sources and modelling architecture to facilitate data injestion, transformation and storage using AWS ecosystem",
    },
    {
      company: "Turntabl",
      link: "https://www.turntabl.io/",
      badges: ["In Person"],
      title: "Software Engineer Intern",
      logo: ClevertechLogo,
      start: "May 2022",
      end: "July 2022",
      description:
        "•	Applied object-oriented programming in Java, Angular, and Kotlin to improve the bus-tracking system’s modularity by 30%. This involved collaborating with the team to identify key areas for improvement and implementing new features that met user needs. Technologies: Kotlin, Java, Angular",
    },
  ],
  skills: [
    "Python",
    "Machine Learning",
    "Computer Vision",
    "Backend Development",
    "Data Science and Analytics",
    "Data Pipelines",
    "Software testing and debugging",
    "MLOPs",
    "Langchain",
    "web3 development",
  ],
  projects: [
    {
      title: "DermaPal",
      techStack: [
        "Capstone Project",
        "Python",
        "Tensorflow",
        "FastAPI",
        "MLFlow",
        "Prefect",
      ],
      description: "An AI Skin disease and remedy recommendation service",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Clear",
      techStack: ["Side Project", "Streamlit", "Python", "Scikit-Learn"],
      description:
        "A skincare product recommendation system that recommends products based on user preferences and skin conditions",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "resumeGPT",
      techStack: ["Side Project", "Langchain", "Openai", "Streamlit"],
      description:
        "A personal LLM finetuned on my resume and linkedin profile to personalise job applications",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Crypto-Pipeline",
      techStack: [
        "Side Project",
        "python",
        "aws-s3",
        "postgres",
        "Docker",
        "streamlit",
      ],
      description:
        "An ETL pipeline for ingesting crypto data from multiple source and transforming the data for technical analysis",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Autor",
      techStack: [
        "Side Project",
        "Python",
        "langchain",
        "github actions",
        "pytest",
      ],
      description:
        "A python package to generate a technical article of a project by parsing the codebase",
      logo: BarepapersLogo,
      link: {
        label: "autor",
        href: "https://pypi.org/project/AutorGPT/",
      },
    },
    {
      title: "Juliaa",
      techStack: ["Startup", "TypeScript", "Python", "Fastapi", "Openai"],
      description: "An Agentic Online Customer Service Agent",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Feast",
      techStack: [
        "MLOPs",
        "Ultralytics",
        "Fastapi",
        "Mlflow",
        "Prometheus",
        "Yolov5",
      ],
      description: "The ingredient identification and recipe creation service",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Credit Risk",
      techStack: [
        "MLOps Engineer",

        "Python",
        "Mlflow",
        "Prefect",
        "Scikit-learn",
      ],
      description:
        "An end to end machine learning pipeline for predicting customer credit risk",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Echo",
      techStack: ["Ai Engineerr", "Python", "Openai"],
      description: "An Agentic AI virtual assistant",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Ecommerce Data Analysis",
      techStack: ["Python", "Scikit Learn", "Seaborn"],
      description:
        "A data science project analysing user activity on mobile and web based applications and using that to predict user annual spending",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "BTC Predictor",
      techStack: [
        "Python",
        "LSTMs",
        "Arima",
        "RNNs",
        "Time Series Data Analysis",
      ],
      description:
        "A time series analysis project analysing the price of Bitcoin and building a machine learning model to predict the future price",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Char RNN",
      techStack: ["Numpy", "Pytorch", "Python"],
      description: "Building an RNN network from scratch",
      logo: AmbitLogo,
    },
    {
      title: "Poppi",
      techStack: ["Startup", "Python", "Fastapi", "React"],
      description:
        "Poppi is a vectorstore repository allowing developer easy access to already created vectorstores of quality data to prototype RAG applications",
      logo: BimLogo,
    },
    {
      title: "Juliaa",
      techStack: ["Start", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
    {
      title: "Lunar Landing",
      techStack: ["Gymasium", "Stable Baseline"],
      description:
        "A reinforcement learning program to land a Rocket on a moon",
      logo: CDGOLogo,
    },
  ],
} as const;
