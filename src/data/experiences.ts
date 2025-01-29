export interface WorkExperience {
  id: number;
  position: string;
  company: string;
  timeFrame: string;
  technologies: string[];
  description?: string;
}

export const experiences: WorkExperience[] = [
  {
    id: 1,
    position: "Backend Developer",
    company: "Freelance & Personal Projects",
    timeFrame: "2023 - Present",
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "Pusher", "TypeScript"],
    description: "Developed real-time chat applications, messaging systems, and backend APIs. Implemented WebSockets for real-time updates and secured user authentication with JWT."
  },
  {
    id: 2,
    position: "Full Stack Developer",
    company: "Freelance & Open Source Contributions",
    timeFrame: "2021 - 2023",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Electron.js", "TypeScript"],
    description: "Built full-stack applications, including a Linux task automation app and a scheduling tool using Electron.js. Designed efficient UI/UX components and integrated backend APIs."
  },
  {
    id: 3,
    position: "AI & Embedded Systems Developer",
    company: "Smart Disease Detection Project",
    timeFrame: "2024 - Present",
    technologies: ["TensorFlow", "Node.js", "MongoDB", "React Native", "Bluetooth"],
    description: "Developing an AI-driven disease detection system for poultry farming. Integrated Bluetooth connectivity, AI models for image processing, and a mobile app for real-time monitoring."
  },
  {
    id: 4,
    position: "Java Developer",
    company: "Personal Java Projects",
    timeFrame: "2024 - Present",
    technologies: ["Java", "Spring Boot", "Servlets", "MySQL"],
    description: "Working on Java-based applications including employee data export systems and restaurant management tools. Implementing multithreading for concurrent data processing."
  }
];
