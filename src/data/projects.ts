export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  featured: boolean;
  category: string;
  role: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "auction-website",
    title: "Auction Website",
    subtitle: "Full-Stack Web Application",
    category: "Full-Stack Development",
    role: "Full-Stack Developer",
    description:
      "A full-stack auction platform built with ASP.NET Core, SQL Server, JavaScript, HTML, and CSS.",
    longDescription:
      "This project is a full-stack auction website designed to support product listings, auction workflows, user interaction, and database-driven functionality. I worked on database design, backend logic, frontend structure, and the overall development process.",
    technologies: ["ASP.NET Core", "SQL Server", "JavaScript", "HTML", "CSS"],
    featured: true,
    highlights: [
      "Designed and implemented the relational database structure.",
      "Built backend functionality using ASP.NET Core.",
      "Created user-facing pages with HTML, CSS, and JavaScript.",
      "Applied full-stack development practices from planning to deployment.",
    ],
    liveUrl: "https://www.rajafath.ir/",
  },
  {
    id: "yvr-capstone",
    title: "YVR eGSE Charging Analytics",
    subtitle: "Data Analytics Capstone Project",
    category: "Data Analytics",
    role: "Data Analyst / Visualization Developer",
    description:
      "A gate-level analytics project focused on electric ground support equipment charging utilization at Vancouver International Airport.",
    longDescription:
      "This capstone project analyzes electric ground support equipment charging behavior at Vancouver International Airport. The work focuses on gate-level charging pressure, charger utilization, occupied minutes, active days, and infrastructure bottlenecks. The goal is to help stakeholders better understand where charging demand is concentrated and where future infrastructure planning may be needed.",
    technologies: ["Python", "Pandas", "Plotly", "Data Analytics", "Visualization"],
    featured: true,
    highlights: [
      "Prepared and analyzed charging session data.",
      "Created gate-level utilization and pressure metrics.",
      "Built visualizations to communicate infrastructure bottlenecks.",
      "Focused on practical decision support for airport charging infrastructure.",
    ],
  },
  {
    id: "image-to-video-generation",
    title: "Image-to-Video Generation",
    subtitle: "AI / Deep Learning Project",
    category: "Artificial Intelligence",
    role: "AI Project Developer",
    description:
      "An AI project exploring image-to-video generation using deep learning models.",
    longDescription:
      "This project explores image-to-video generation using deep learning models and video datasets. The workflow includes preprocessing video data, using the first frame as an input image, generating future frames, and evaluating output quality using metrics such as MSE, PSNR, and SSIM.",
    technologies: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "Colab"],
    featured: true,
    highlights: [
      "Prepared video data for image-to-video generation experiments.",
      "Worked with deep learning models for frame generation.",
      "Evaluated generated outputs using image quality metrics.",
      "Documented limitations such as blur, artifacts, and motion consistency issues.",
    ],
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    subtitle: "Frontend Web Development",
    category: "Frontend Development",
    role: "Frontend Developer",
    description:
      "A modern restaurant website built with React, focused on presenting menu items and restaurant information.",
    longDescription:
      "This project is a modern restaurant website focused on clean user experience, menu presentation, and frontend structure. It uses React for component-based development and is designed to support menu data and restaurant information in a scalable way.",
    technologies: ["React", "JavaScript", "CSS", "API Integration"],
    featured: false,
    highlights: [
      "Built reusable frontend components.",
      "Structured menu-related content for easy maintenance.",
      "Focused on responsive design and user experience.",
      "Prepared the project for future API integration.",
    ],
  },
];