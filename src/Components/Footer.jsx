import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* About Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">DEVENETS</h2>
                        <p className="text-gray-400 mb-4">
                            Crafting unforgettable experiences with innovation and creativity.
                        </p>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-2xl hover:text-gray-400 transition-colors" />
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-2xl hover:text-gray-400 transition-colors" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-2xl hover:text-gray-400 transition-colors" />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-2xl hover:text-gray-400 transition-colors" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><NavLink to="/home" className="hover:text-gray-400 transition-colors">Home</NavLink></li>
                            <li><NavLink to="/events" className="hover:text-gray-400 transition-colors">Events</NavLink></li>
                            <li><NavLink to="/services" className="hover:text-gray-400 transition-colors">Services</NavLink></li>
                            <li><NavLink to="/aboutUs" className="hover:text-gray-400 transition-colors">About Us</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center mb-2">
                                <MdPhone className="text-xl mr-2" /> <span>0187845221</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <MdEmail className="text-xl mr-2" /> <span>info@devents.com</span>
                            </li>
                            <li className="flex items-center">
                                <MdLocationOn className="text-xl mr-2" /> <span>123 Event Street, City, Country</span>
                            </li>
                        </ul>
                    </div>

                    {/* Subscribe to Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                        <form>
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full p-3 mb-4 text-gray-900 placeholder-gray-500 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                            <button 
                                type="submit" 
                                className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 text-gray-400 py-4 mt-8">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} DEVENETS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
