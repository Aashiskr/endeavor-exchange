
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-marketplace-purple/90 to-marketplace-blue/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join our community today and take the first step towards building practical skills, meaningful connections, and a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-marketplace-purple hover:bg-gray-100 transition-colors px-8">
                Create Account
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-colors px-8">
                Browse Projects
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-white/80 text-sm">
            Already have an account? <Link to="/signin" className="text-white underline hover:text-white/90">Sign in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
