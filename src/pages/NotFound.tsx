
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center px-4">
          <div className="inline-block mb-8">
            <div className="w-24 h-24 bg-marketplace-lavender rounded-full flex items-center justify-center mx-auto">
              <span className="text-5xl text-marketplace-purple">404</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find the page you were looking for. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-marketplace-purple hover:bg-marketplace-purple/90">
                Return to Home
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="border-marketplace-purple text-marketplace-purple">
                Browse Projects
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
