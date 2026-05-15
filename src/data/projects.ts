export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "auction-website",
    title: "Auction Website",
    subtitle: "Full-Stack Web Application",
    description:
      "A full-stack auction platform built with Node.js (Express.js), MongoDB, React.js, HTML, and CSS. The project includes database design, user workflows, product listings, and auction-related functionality.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "JavaScript", "HTML", "CSS"],
    featured: true,
  },
  {
    id: "yvr-capstone",
    title: "YVR eGSE Charging Analytics",
    subtitle: "Data Analytics Capstone Project",
    description:
      "A gate-level analytics project focused on electric ground support equipment charging utilization at Vancouver International Airport. The project analyzes charging pressure, occupancy, and infrastructure bottlenecks.",
    technologies: ["Python", "Pandas", "Plotly", "Data Analytics", "Visualization"],
    featured: true,
  },
  {
    id: "image-to-video-generation",
    title: "Image-to-Video Generation",
    subtitle: "AI / Deep Learning Project",
    description:
      "An AI project exploring image-to-video generation using deep learning models. The project includes preprocessing video data, generating frames, and evaluating output quality using metrics such as MSE, PSNR, and SSIM.",
    technologies: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "Colab"],
    featured: true,
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    subtitle: "Frontend Web Development",
    description:
      "A modern restaurant website built with React, focused on presenting menu items, restaurant information, and a clean user experience.",
    technologies: ["React", "JavaScript", "CSS", "API Integration"],
    featured: false,
  },
];