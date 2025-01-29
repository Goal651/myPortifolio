export interface Industry {
  name: string;
  description: string;
  technologies: string[];
  icon?: string;
}

export const industries: Industry[] = [
  {
    name: "Real-Time Communication",
    description: "Built messaging applications with real-time chat, video/audio calls, and notifications using WebSockets and Pusher.",
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "Pusher", "React"]
  },
  {
    name: "AI & Embedded Systems",
    description: "Developed an AI-powered smart disease detection system for poultry farming with Bluetooth integration and TensorFlow AI models.",
    technologies: ["TensorFlow", "Node.js", "MongoDB", "React Native", "Bluetooth"]
  },
  {
    name: "Automation & Task Scheduling",
    description: "Created a Linux task management and automation app inspired by GTG, helping users manage tasks efficiently.",
    technologies: ["Electron.js", "JavaScript", "Node.js", "TypeScript"]
  },
  {
    name: "Healthcare Tech",
    description: "Developed telemedicine and patient management platforms, integrating WebRTC for video consultations and secure medical records.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "WebRTC"]
  },
  {
    name: "Workforce & Business Management",
    description: "Built employee data export systems and scheduling tools with Java and multithreading for concurrent processing.",
    technologies: ["Java", "Spring Boot", "MySQL", "Multithreading"]
  },
  {
    name: "Home & IoT Automation",
    description: "Worked on smart home systems integrating IoT devices with automation features like energy monitoring and security.",
    technologies: ["Home Assistant", "Python", "MQTT", "Node.js"]
  }
];
