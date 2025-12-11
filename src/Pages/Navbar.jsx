import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  // Helper function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-full mt-5">
      <div className="navbar bg-gray-950/90 backdrop-blur-lg border-y border-blue-500/30 shadow-lg shadow-blue-500/10 min-h-[80px] px-4 sm:px-6 lg:px-8">
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src="/cpc-logo.svg" alt="CPC Logo" className="h-15 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
            <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CPC
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link
                to="/"
                className={`transition-all duration-300 rounded-lg ${
                  isActive("/")
                    ? "bg-blue-500/30 text-blue-300 font-semibold shadow-sm border-l-4 border-blue-500"
                    : "text-gray-200 hover:bg-gray-700"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="transition-all duration-300 rounded-lg font-semibold text-gray-200 hover:bg-gray-700 cursor-pointer"
              >
                Features
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-xl shadow-blue-500/20 bg-gray-800/95 backdrop-blur-lg border border-blue-500/30 rounded-box min-w-[180px] z-50"
              >
                <li>
                  <Link
                    to="/blood-donation"
                    className={`transition-all duration-300 rounded-lg ${
                      isActive("/blood-donation")
                        ? "bg-red-500/30 text-red-300 font-semibold border-l-4 border-red-500"
                        : "text-red-400 hover:bg-red-500/20"
                    }`}
                  >
                    Blood Bank
                  </Link>
                </li>
                <li>
                  <Link
                    to="/lost-found"
                    className={`transition-all duration-300 rounded-lg ${
                      isActive("/lost-found")
                        ? "bg-blue-500/30 text-blue-300 font-semibold border-l-4 border-blue-500"
                        : "text-blue-400 hover:bg-blue-500/20"
                    }`}
                  >
                    Lost & Found
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className={`transition-all duration-300 rounded-lg ${
                      isActive("/events")
                        ? "bg-yellow-500/30 text-yellow-300 font-semibold border-l-4 border-yellow-500"
                        : "text-yellow-400 hover:bg-yellow-500/20"
                    }`}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/auction"
                    className={`transition-all duration-300 rounded-lg ${
                      isActive("/auction")
                        ? "bg-purple-500/30 text-purple-300 font-semibold border-l-4 border-purple-500"
                        : "text-purple-400 hover:bg-purple-500/20"
                    }`}
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bulletin"
                    className={`transition-all duration-300 rounded-lg ${
                      isActive("/bulletin")
                        ? "bg-orange-500/30 text-orange-300 font-semibold border-l-4 border-orange-500"
                        : "text-orange-400 hover:bg-orange-500/20"
                    }`}
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/job-vacancy"
                    className={`transition-all duration-300 rounded-lg ${
                      isActive("/job-vacancy")
                        ? "bg-teal-500/30 text-teal-300 font-semibold border-l-4 border-teal-500"
                        : "text-teal-400 hover:bg-teal-500/20"
                    }`}
                  >
                    Job Board
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/events"
                className={`transition-all duration-300 rounded-lg ${
                  isActive("/events")
                    ? "bg-yellow-500/30 text-yellow-300 font-semibold shadow-sm border-l-4 border-yellow-500"
                    : "text-gray-200 hover:bg-gray-700"
                }`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`transition-all duration-300 rounded-lg ${
                  isActive("/about")
                    ? "bg-blue-500/30 text-blue-300 font-semibold shadow-sm border-l-4 border-blue-500"
                    : "text-gray-200 hover:bg-gray-700"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`transition-all duration-300 rounded-lg ${
                  isActive("/gallery")
                    ? "bg-pink-500/30 text-pink-300 font-semibold shadow-sm border-l-4 border-pink-500"
                    : "text-gray-200 hover:bg-gray-700"
                }`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className={`transition-all duration-300 rounded-lg ${
                  isActive("/resources")
                    ? "bg-teal-500/30 text-teal-300 font-semibold shadow-sm border-l-4 border-teal-500"
                    : "text-gray-200 hover:bg-gray-700"
                }`}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`transition-all duration-300 rounded-lg ${
                  isActive("/contact")
                    ? "bg-green-500/30 text-green-300 font-semibold border-l-4 border-green-500"
                    : "text-gray-200 hover:bg-gray-700"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-2">
          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-xl shadow-blue-500/20 bg-gray-800/95 backdrop-blur-lg border border-blue-500/30 rounded-box w-52"
            >
              <li>
                <Link
                  to="/blood-donation"
                  className={`transition-all duration-200 ${
                    isActive("/blood-donation")
                      ? "bg-red-500/30 text-red-300 font-semibold border-l-4 border-red-500"
                      : "text-red-400 hover:bg-red-500/20"
                  }`}
                >
                  🩸 Blood Donation
                </Link>
              </li>
              <li>
                <Link
                  to="/lost-found"
                  className={`transition-all duration-200 ${
                    isActive("/lost-found")
                      ? "bg-blue-500/30 text-blue-300 font-semibold border-l-4 border-blue-500"
                      : "text-blue-400 hover:bg-blue-500/20"
                  }`}
                >
                  🔍 Lost & Found
                </Link>
              </li>
              <li>
                <Link
                  to="/flood-relief"
                  className={`transition-all duration-200 ${
                    isActive("/flood-relief")
                      ? "bg-teal-500/30 text-teal-300 font-semibold border-l-4 border-teal-500"
                      : "text-teal-400 hover:bg-teal-500/20"
                  }`}
                >
                  🌊 Flood Relief
                </Link>
              </li>
              <li>
                <Link
                  to="/medical-aid"
                  className={`transition-all duration-200 ${
                    isActive("/medical-aid")
                      ? "bg-green-500/30 text-green-300 font-semibold border-l-4 border-green-500"
                      : "text-green-400 hover:bg-green-500/20"
                  }`}
                >
                  🏥 Medical Aid
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={`transition-all duration-200 ${
                    isActive("/events")
                      ? "bg-yellow-500/30 text-yellow-300 font-semibold border-l-4 border-yellow-500"
                      : "text-yellow-400 hover:bg-yellow-500/20"
                  }`}
                >
                  🎉 Events
                </Link>
              </li>
              <li>
                <Link
                  to="/auction"
                  className={`transition-all duration-200 ${
                    isActive("/auction")
                      ? "bg-purple-500/30 text-purple-300 font-semibold border-l-4 border-purple-500"
                      : "text-purple-400 hover:bg-purple-500/20"
                  }`}
                >
                  🛒 Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/bulletin"
                  className={`transition-all duration-200 ${
                    isActive("/bulletin")
                      ? "bg-orange-500/30 text-orange-300 font-semibold border-l-4 border-orange-500"
                      : "text-orange-400 hover:bg-orange-500/20"
                  }`}
                >
                  📢 Bulletin
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`transition-all duration-200 ${
                    isActive("/about")
                      ? "bg-blue-500/30 text-blue-300 font-semibold border-l-4 border-blue-500"
                      : "text-gray-200 hover:bg-gray-700"
                  }`}
                >
                  ℹ️ About
                </Link>
              </li>
            </ul>
          </div>

          {/* User Menu */}
          {isAuthenticated ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={
                      user?.avatar ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-800/95 backdrop-blur-lg border border-blue-500/30 rounded-box z-50 mt-3 w-52 p-2 shadow-xl shadow-blue-500/20"
              >
                <li className="menu-title">
                  <span className="text-xs text-gray-400">
                    Welcome, {user?.name}
                  </span>
                </li>
                <li>
                  <Link to="/profile" className="justify-between text-gray-200 hover:bg-gray-700">
                    Profile
                    <span className="badge badge-sm bg-blue-500 text-white border-none">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin-panel" className="text-gray-200 hover:bg-gray-700">Dashboard</Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      if (confirm("Are you sure you want to logout?")) {
                        logout();
                      }
                    }}
                    className="text-red-400 hover:bg-red-500/20"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/auth" className="btn btn-outline btn-primary btn-sm">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
