import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo/TravelBuddy.io.png';

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-secondary text-white text-base px-4 py-2 rounded-lg'
              : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? 'bg-secondary text-white text-base px-4 py-2 rounded-lg'
              : ''
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? 'bg-secondary text-white text-base px-4 py-2 rounded-lg'
              : ''
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar max-w-7xl mx-auto py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img className="w-32" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-wrap items-center gap-8 text-sm menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <details className="dropdown">
            <summary className="btn btn-sm">Dashboard</summary>
            <ul className="p-2 shadow menu menu-sm dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <NavLink to="/dashboard/my-services" className="bg-transparent">
                  My-services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-services"
                  className="bg-transparent"
                >
                  Add-services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-schedules"
                  className="bg-transparent"
                >
                  My-schedules
                </NavLink>
              </li>
            </ul>
          </details>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;