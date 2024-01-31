import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo/TravelBuddy.io.png';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import Lottie from 'lottie-react';
import noUserAnimation from '../assets/lottie/animation_avatar.json';
import { useDarkMode } from '../hooks/useDarkMode';
import { MdSunny, MdOutlineDarkMode } from 'react-icons/md';

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  // console.log(user);
  const { handleChangeTheme, mode } = useDarkMode();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success('Logged out successfully!');
      })
      .catch(error => toast.error(error.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-secondary text-white dark:text-slate-200 px-3 py-1 rounded-lg'
              : ''
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-services"
          className={({ isActive }) =>
            isActive
              ? 'bg-secondary text-white dark:text-slate-200 px-3 py-1 rounded-lg'
              : ''
          }
        >
          ALL SERVICES
        </NavLink>
      </li>
      <li>
        {user?.email ? (
          <div className="flex lg:flex-row lg:items-center flex-col items-start lg:gap-8">
            <details className="dropdown">
              <summary className="lg:btn lg:btn-outline lg:btn-sm btn-secondary bg-inherit text-inherit">
                Dashboard
              </summary>
              <ul className="p-2 shadow menu menu-sm dropdown-content z-[1] bg-base-100 dark:bg-slate-700 text-secondary rounded-box w-52">
                <li>
                  <NavLink
                    to="/add-services"
                    className="bg-transparent dark:hover:text-white"
                  >
                    Add Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/manage-services"
                    className="bg-transparent dark:hover:text-white"
                  >
                    Manage Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-schedules"
                    className="bg-transparent dark:hover:text-white"
                  >
                    My Schedules
                  </NavLink>
                </li>
              </ul>
            </details>
            {/* another dropdown */}
            {/* <div className="dropdown">
              <label
                tabIndex={0}
                className="lg:btn lg:btn-outline lg:btn-sm btn-secondary bg-inherit text-inherit"
              >
                Dashboard
              </label>
              <ul
                tabIndex={0}
                className="p-2 shadow menu menu-sm dropdown-content z-[1] bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/add-services" className="bg-transparent">
                    Add Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/manage-services" className="bg-transparent">
                    Manage Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-schedules" className="bg-transparent">
                    My Schedules
                  </NavLink>
                </li>
              </ul>
            </div> */}
            <button onClick={handleLogout} className="capitalize mt-2 lg:mt-0">
              LOGOUT
            </button>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? 'bg-secondary text-white dark:text-slate-200 px-3 py-1 rounded-lg'
                : ''
            }
          >
            SIGN IN
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="bg-transparent">
      <div className="navbar mx-auto py-4 md:px-6">
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
              className="flex flex-col flex-wrap text-sm space-y-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 dark:bg-slate-700"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img className="w-32 rounded-3xl" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-wrap items-center gap-7 text-sm font-semibold text-secondary menu-horizontal px-1 dark:text-white">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end items-center">
          <button
            onClick={handleChangeTheme}
            className="px-3 py-3 rounded-full mr-2 text-3xl"
          >
            {mode === 'dark' ? (
              <MdSunny></MdSunny>
            ) : (
              <MdOutlineDarkMode></MdOutlineDarkMode>
            )}
          </button>
          <div>
            {user?.email ? (
              <div className="flex flex-col md:flex-row items-center gap-2 mr-4 lg:mr-0">
                <div className="avatar">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <p className="dark:text-white">{user?.displayName}</p>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="avatar">
                  <div className="w-14 h-14 rounded-full">
                    <Lottie
                      animationData={noUserAnimation}
                      loop={true}
                    ></Lottie>
                  </div>
                </div>
                <Link to="/login" className="btn btn-secondary btn-sm">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
