import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactCard = ({ 
  icon: Icon, 
  title, 
  value, 
  link 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  link: string;
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="p-4 bg-primary bg-opacity-10 rounded-full mr-6">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <div>
      <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">{title}</h3>
      <p className="text-lg font-medium">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "EMAIL",
      value: "wigothehacker@gmail.com",
      link: "mailto:wigothehacker@gmail.com"
    },
    {
      icon: FaLinkedin,
      title: "LINKEDIN",
      value: "linkedin.com/in/wilson-goal-426082300",
      link: "https://www.linkedin.com/in/wilson-goal-426082300/"
    },
    {
      icon: FaGithub,
      title: "GITHUB",
      value: "github.com/goal651",
      link: "https://github.com/goal651"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            I am open to discussing professional opportunities, collaborations, and innovative projects that align with my expertise in backend development and full-stack engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto"
        >
          {contactInfo.map((info) => (
            <ContactCard
              key={info.title}
              icon={info.icon}
              title={info.title}
              value={info.value}
              link={info.link}
            />
          ))}
        </motion.div>

        <footer className="mt-20 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Goal Wigo. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
