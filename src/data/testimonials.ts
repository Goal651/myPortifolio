export interface Testimonial {
    id: number;
    name: string;
    designation: string;
    testimonial: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "David Smith",
        designation: "CTO, Tech Innovations Ltd.",
        testimonial: "Goal's ability to integrate real-time communication systems and develop complex backend architectures is unmatched. His work on our chat application was a game-changer."
    },
    {
        id: 2,
        name: "Alice Johnson",
        designation: "Project Manager, Digital Solutions",
        testimonial: "Working with Goal has been an incredible experience. His expertise in Node.js and MongoDB helped us streamline our app's performance and scalability. His work on AI systems has also been remarkable."
    },
    {
        id: 3,
        name: "Michael Brown",
        designation: "Lead Developer, SmartTech Systems",
        testimonial: "Goal's dedication to quality and his deep understanding of system architecture have consistently delivered results. His contributions to our AI-powered systems and automation tools have been pivotal."
    },
    {
        id: 4,
        name: "Rachel Lee",
        designation: "CEO, Innovatech Solutions",
        testimonial: "I have been impressed with Goal's problem-solving abilities. He has a knack for developing seamless backend solutions and has consistently demonstrated a strong understanding of full-stack development."
    },
    {
        id: 5,
        name: "James Miller",
        designation: "Director of Engineering, FutureTech",
        testimonial: "Goal's technical skills are top-notch. He has a unique ability to understand complex requirements and translate them into scalable solutions, especially in the areas of real-time communication and AI-driven automation."
    }
];
