
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Menu, Sparkles, Home } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-marketplace-purple to-marketplace-blue rounded-md flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-lg">PM</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-gray-800">Project</span>
              <span className="font-bold text-xl text-marketplace-purple">Marketplace</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-marketplace-purple transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-marketplace-purple transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/projects" className="text-gray-600 hover:text-marketplace-purple transition-colors relative group">
              Browse Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-marketplace-purple transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/mentors" className="text-gray-600 hover:text-marketplace-purple transition-colors relative group">
              Find Mentors
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-marketplace-purple transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/showcase" className="text-gray-600 hover:text-marketplace-purple transition-colors relative group">
              Showcases
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-marketplace-purple transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-marketplace-purple transition-colors relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-marketplace-purple transition-all group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-60 pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-marketplace-purple focus:border-transparent transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <Link to="/signin">
              <Button variant="ghost" className="text-gray-700 hover:text-marketplace-purple">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-marketplace-purple hover:bg-marketplace-purple/90 flex items-center gap-1">
                <Sparkles className="h-4 w-4" />
                Sign Up
              </Button>
            </Link>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-marketplace-purple focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            
            <nav className="flex flex-col gap-3">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-marketplace-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="text-gray-600 hover:text-marketplace-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Projects
              </Link>
              <Link 
                to="/mentors" 
                className="text-gray-600 hover:text-marketplace-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Mentors
              </Link>
              <Link 
                to="/showcase" 
                className="text-gray-600 hover:text-marketplace-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Showcases
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-marketplace-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </nav>
            
            <div className="flex gap-3 pt-2">
              <Link to="/signin" className="flex-1">
                <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" className="flex-1">
                <Button className="w-full bg-marketplace-purple hover:bg-marketplace-purple/90" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
