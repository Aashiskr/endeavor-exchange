
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const EnhancedNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    // No need to navigate, as they can stay on the same page
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-marketplace-purple to-blue-500 rounded-full blur-sm opacity-70"></div>
            <div className="relative bg-white dark:bg-gray-900 rounded-full p-1.5">
              <Sparkles className="h-6 w-6 text-marketplace-purple" />
            </div>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-marketplace-purple to-blue-500 bg-clip-text text-transparent">
            ProjectMarket
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-gray-700 hover:text-marketplace-purple relative group ${
              location.pathname === "/" ? "text-marketplace-purple font-medium" : ""
            }`}
          >
            Home
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-marketplace-purple transition-all duration-300 ${
                location.pathname === "/" ? "w-full" : "group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            to="/projects"
            className={`text-gray-700 hover:text-marketplace-purple relative group ${
              location.pathname === "/projects"
                ? "text-marketplace-purple font-medium"
                : ""
            }`}
          >
            Projects
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-marketplace-purple transition-all duration-300 ${
                location.pathname === "/projects" ? "w-full" : "group-hover:w-full"
              }`}
            ></span>
          </Link>
          
          {isAuthenticated ? (
            <Button 
              onClick={handleLogout}
              variant="outline" 
              className="flex items-center space-x-2 border-marketplace-purple text-marketplace-purple hover:bg-marketplace-purple/10"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          ) : (
            <>
              <Link
                to="/signin"
                className={`text-gray-700 hover:text-marketplace-purple relative group ${
                  location.pathname === "/signin"
                    ? "text-marketplace-purple font-medium"
                    : ""
                }`}
              >
                Sign In
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-marketplace-purple transition-all duration-300 ${
                    location.pathname === "/signin" ? "w-full" : "group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link to="/signup">
                <Button
                  variant="default"
                  className="bg-marketplace-purple hover:bg-marketplace-purple/90 text-white"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-gray-700 py-2 ${
                location.pathname === "/" ? "text-marketplace-purple font-medium" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`text-gray-700 py-2 ${
                location.pathname === "/projects"
                  ? "text-marketplace-purple font-medium"
                  : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            
            {isAuthenticated ? (
              <Button 
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                variant="outline" 
                className="flex items-center justify-center space-x-2 border-marketplace-purple text-marketplace-purple hover:bg-marketplace-purple/10"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            ) : (
              <>
                <Link
                  to="/signin"
                  className={`text-gray-700 py-2 ${
                    location.pathname === "/signin"
                      ? "text-marketplace-purple font-medium"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="default"
                    className="w-full bg-marketplace-purple hover:bg-marketplace-purple/90 text-white"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default EnhancedNavbar;
