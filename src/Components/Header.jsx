import { NavLink } from "react-router-dom";
import { MdOutlinePhoneCallback, MdEmail } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogout = () => {
        logOut();
    };
    
    return (
        <div className="relative z-20">
            <section className="bg-zinc-100 px-6 md:px-28 py-4 grid grid-cols-1 md:grid-cols-3 mx-auto">
                <div className="flex justify-center md:justify-start">
                    <MdOutlinePhoneCallback className="inline text-md text-zinc-500" /> <span className="ml-2">0187845221</span>
                </div>
                <div className="flex justify-center my-2 md:my-0">
                    <BsStopwatch className="inline text-zinc-500 text-xl" /> <span className="ml-2">Mon – Fri 9.00 am – 6.00 pm</span>
                </div>
                <div className="flex justify-center md:justify-end space-x-4">
                    <FaFacebook className="inline text-zinc-500 text-xl" /> <FaLinkedin className="inline text-zinc-500 text-xl" /><MdEmail className="inline text-zinc-500 text-xl" />
                </div>
            </section>
            <section className="bg-base-100">
                <div className="navbar max-w-6xl mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <button tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow"
                            >
                                <li><NavLink to='/home'>Home</NavLink></li>
                                <li><NavLink to='/events'>Events</NavLink></li>
                                <li><NavLink to='/services'>Services</NavLink></li>
                                <li><NavLink to='/aboutUs'>About Us</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold block text-2xl text-cyan-500">DVENTS</p>
                            <p className="text-zinc-500">Making Events Simpler</p>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-4">
                            <li><NavLink className='text-md font-semibold' to='/home'>Home</NavLink></li>
                            <li><NavLink className='text-md font-semibold' to='/events'>Events</NavLink></li>
                            <li><NavLink className='text-md font-semibold' to='/services'>Services</NavLink></li>
                            <li><NavLink className='text-md font-semibold' to='/aboutUs'>About Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end me-4">
                        <FaRegUserCircle className="me-2 text-xl text-cyan-500 font-bold" />
                        {user ? (
                            <>
                                <button onClick={handleLogout} className="text-md font-semibold">Log Out</button>
                            </>
                        ) : (
                            <NavLink className='text-md font-semibold' to='/login'>Login</NavLink>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;
