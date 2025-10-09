import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaPinterest, FaTwitter, FaFacebookF, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const iconVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: { type: "spring", stiffness: 400, damping: 10 }
        }
    };

    return (
        <motion.footer
            className="bg-gradient-to-b from-gray-900 to-black text-white pt-16   pb-8 px-4 md:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="max-w-full mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand Column */}
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <motion.h3
                            className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                        >
                            Chitromul
                        </motion.h3>
                        <p className="text-gray-300 leading-relaxed">
                            Capturing life's precious moments with artistry and passion.
                            Specializing in portrait, landscape, and event photography.
                        </p>
                        <div className="flex space-x-4">
                            {[FaInstagram, FaPinterest, FaTwitter, FaFacebookF].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition-colors"
                                    variants={iconVariants}
                                    whileHover="hover"
                                    initial="initial"
                                >
                                    <Icon className="text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <h4 className="text-lg font-semibold text-white border-b border-amber-500 pb-2 inline-block">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {['Portfolio', 'About Me', 'Services', 'Pricing', 'Blog'].map((link, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }}>
                                    <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                                        {link}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <h4 className="text-lg font-semibold text-white border-b border-amber-500 pb-2 inline-block">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {['Wedding Photography', 'Portrait Sessions', 'Event Coverage', 'Commercial Shoots', 'Photo Editing'].map((service, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }}>
                                    <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                                        {service}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <h4 className="text-lg font-semibold text-white border-b border-amber-500 pb-2 inline-block">
                            Get In Touch
                        </h4>
                        <div className="space-y-3">
                            <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                                <div className="bg-amber-500 p-2 rounded-full">
                                    <FaMapMarkerAlt className="text-white" />
                                </div>
                                <span className="text-gray-300">123 Photography Ave, Studio City</span>
                            </motion.div>
                            <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                                <div className="bg-amber-500 p-2 rounded-full">
                                    <FaPhone className="text-white" />
                                </div>
                                <span className="text-gray-300">+1 (555) 123-4567</span>
                            </motion.div>
                            <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                                <div className="bg-amber-500 p-2 rounded-full">
                                    <FaEnvelope className="text-white" />
                                </div>
                                <span className="text-gray-300">hello@lenscraft.com</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Newsletter Subscription */}
                <motion.div
                    className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 mb-12 border border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-white">Stay Updated</h3>
                            <p className="text-gray-300">Get the latest photography tips and exclusive offers</p>
                        </div>
                        <div className="flex w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-3 rounded-l-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
                            />
                            <motion.button
                                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-r-lg font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                >
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Chitromul Photography. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                            <motion.a
                                key={index}
                                href="#"
                                className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
                                whileHover={{ scale: 1.05 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;