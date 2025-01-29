import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        What people say about me
                    </p>
                </motion.div>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials?.map(({ id, name, designation, testimonial }) => (
                        <div key={id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <FaQuoteLeft />
                            <p className="text-gray-700 dark:text-gray-300 text-xl font-bold my-1">{testimonial}</p>
                            <FaQuoteRight />
                            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">{name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{designation}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials;
