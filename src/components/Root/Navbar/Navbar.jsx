import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar  lg:max-w-6xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li ><NavLink to= '/'>Home</NavLink></li>
        <li><NavLink to='/book'>Listed Books</NavLink></li>
        <li><NavLink to='/read'>Pages to Read</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to= '/'>Home</NavLink></li>
        <li><NavLink to='/book'>Listed Books</NavLink></li>
        <li><NavLink to='/read'>Pages to Read</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end ">
<div className="flex flex-col lg:flex-row gap-2">
    <a className="btn bg-green-500	text-white">Sign In</a>
    <a className="btn bg-cyan-400	text-white" >Sign Up</a>
    </div>
  </div>
</div>
    );
};

export default Navbar;