export type TechBrandColor = {
  bg: string;  // Tailwind background color class
  text: string; // Tailwind text color class
  border?: string; // Optional Tailwind border color class
};

export interface Technology {
  name: string;
  category: 'languages' | 'frameworks' | 'databases' | 'tools' | 'cloud';
  proficiency: number;
  brandColor: TechBrandColor;
}


export const technologies: Technology[] = [
  // Languages
  {
    name: 'PHP',
    category: 'languages',
    proficiency: 70,
    brandColor: {
      bg: 'bg-indigo-100 dark:bg-indigo-900/20',
      text: 'text-indigo-600 dark:text-indigo-400',
    }
  },
  {
    name: 'Python',
    category: 'languages',
    proficiency: 75,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },
  {
    name: 'JavaScript',
    category: 'languages',
    proficiency: 85,
    brandColor: {
      bg: 'bg-yellow-100 dark:bg-yellow-900/20',
      text: 'text-yellow-600 dark:text-yellow-400',
    }
  },
  {
    name: 'TypeScript',
    category: 'languages',
    proficiency: 90,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },
  {
    name: 'Java',
    category: 'languages',
    proficiency: 65,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-yellow-900/20',
      text: 'text-yellow-600 dark:text-yellow-400',
    }
  },

  // Frameworks
  {
    name: 'DaisyUI',
    category: 'frameworks',
    proficiency: 90,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },
  {
    name: 'React.js',
    category: 'frameworks',
    proficiency: 95,
    brandColor: {
      bg: 'bg-emerald-100 dark:bg-emerald-900/20',
      text: 'text-emerald-600 dark:text-emerald-400',
    }
  },
  {
    name: 'Next.js',
    category: 'frameworks',
    proficiency: 88,
    brandColor: {
      bg: 'bg-emerald-100 dark:bg-emerald-900/20',
      text: 'text-emerald-600 dark:text-emerald-400',
    }
  },
  {
    name: 'Express.js',
    category: 'frameworks',
    proficiency: 85,
    brandColor: {
      bg: 'bg-gray-100 dark:bg-gray-900/20',
      text: 'text-gray-600 dark:text-gray-400',
    }
  },
  {
    name: 'Socket.io',
    category: 'frameworks',
    proficiency: 80,
    brandColor: {
      bg: 'bg-cyan-100 dark:bg-cyan-900/20',
      text: 'text-cyan-600 dark:text-cyan-400',
    }
  },

  // Databases
  {
    name: 'MySQL',
    category: 'databases',
    proficiency: 80,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },
  {
    name: 'PostgreSQL',
    category: 'databases',
    proficiency: 82,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },
  {
    name: 'MongoDB',
    category: 'databases',
    proficiency: 90,
    brandColor: {
      bg: 'bg-green-100 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400',
    }
  },


  // Tools
  {
    name: 'Git',
    category: 'tools',
    proficiency: 80,
    brandColor: {
      bg: 'bg-orange-100 dark:bg-orange-900/20',
      text: 'text-orange-600 dark:text-orange-400',
    }
  },
  {
    name: 'VSCode',
    category: 'tools',
    proficiency: 90,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },
];