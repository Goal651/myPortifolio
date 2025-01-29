export interface ProjectImage {
  url: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  images: ProjectImage[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "chat-app",
    title: "Real-Time Chat App",
    shortDescription: "A messaging platform with encrypted chats and media sharing.",
    fullDescription:
      "A real-time chat application using WebSockets for instant messaging. Features include text messaging, file uploads, video calls, and group chats. Integrated with MongoDB for message storage and authentication using JWT.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    images: Array.from({ length: 6 }, (_, i) => ({
      url: `https://picsum.photos/800/600`,
      alt: `Chat App Screenshot ${i + 1}`
    })),
    featured: true,
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat.example.com"
  },
  {
    id: "ai-disease-detection",
    title: "Smart Disease Detection System",
    shortDescription: "AI-powered system for detecting poultry diseases in real-time.",
    fullDescription:
      "A smart poultry disease detection system that uses TensorFlow for real-time image processing. Integrated with a mobile app via Bluetooth for farmers to monitor livestock health. Features include USSD integration, alert notifications, and AI-based analysis.",
    techStack: ["TensorFlow", "Node.js", "MongoDB", "React Native", "Bluetooth"],
    images: Array.from({ length: 6 }, (_, i) => ({
      url: `https://picsum.photos/800/600`,
      alt: `AI Disease Detection Screenshot ${i + 1}`
    })),
    featured: true,
    githubUrl: "https://github.com/yourusername/ai-disease-detection",
    liveUrl: "https://disease-detection.example.com"
  },
  {
    id: "scheduler-app",
    title: "Task Scheduler & Automation",
    shortDescription: "Electron-based Linux automation tool inspired by GTG.",
    fullDescription:
      "A Linux task scheduler that automates app and task management. Built with Electron.js, it provides task categorization, reminders, and automation triggers. Uses TypeScript for type safety and stores data locally.",
    techStack: ["Electron.js", "TypeScript", "React.js", "Tailwind CSS"],
    images: Array.from({ length: 4 }, (_, i) => ({
      url: `https://picsum.photos/800/600`,
      alt: `Scheduler App Screenshot ${i + 1}`
    })),
    featured: true,
    githubUrl: "https://github.com/yourusername/scheduler-app",
    liveUrl: "https://scheduler.example.com"
  }
];
