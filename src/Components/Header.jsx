import { NavLink } from "react-router-dom";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
    return (
        <div>
            <section className="bg-zinc-100 px-28 py-4 grid grid-cols-1 md:grid-cols-3 grid-4 mx-auto">
                <div>
                    <MdOutlinePhoneCallback className="inline text-mdtext-zinc-500"  /> <span>0187845221</span>
                </div>
                <div>
                    <BsStopwatch className="inline text-zinc-500 text-xl"  /> <span>Mon – Fri 9.00 am – 6.00 pm</span>
                </div>
                <div className="flex md:justify-end ">
                   <FaFacebook className="inline text-zinc-500 me-4 text-xl" /> <FaLinkedin className="inline text-zinc-500 me-4 text-xl" /><MdEmail className="inline text-zinc-500 text-xl"  />
                </div>
            </section>
            <section className="">
                <div className="navbar max-w-6xl mx-auto bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 md:hidden"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink className='text-mdfont-bold' to='/home'>Home</NavLink></li>
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
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink className='text-md font-semibold' to='/home'>Home</NavLink></li>
                            <li><NavLink className='text-md font-semibold' to='/events'>Events</NavLink></li>
                            <li><NavLink className='text-md font-semibold' to='/services'>Services</NavLink></li>
                            <li><NavLink className='text-md font-semibold' to='/aboutUs'>About Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <NavLink className='text-md font-semibold' to='/login'>Login</NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;