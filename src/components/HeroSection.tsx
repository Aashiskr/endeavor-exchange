
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Users, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-marketplace-lavender/30 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <div className="inline-flex items-center bg-marketplace-lavender/50 px-3 py-1 rounded-full text-marketplace-purple text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-1" /> Empowering the next generation of creators
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connect, Collaborate & <span className="text-marketplace-purple">Grow</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              The Project Marketplace bridges the gap between academic learning and practical experience by connecting students, freelancers, and companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button className="bg-marketplace-purple hover:bg-marketplace-purple/90 text-white px-8 py-6 text-lg group">
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="border-marketplace-purple text-marketplace-purple hover:bg-marketplace-lavender px-8 py-6 text-lg">
                  Join Our Community
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white font-medium text-sm hover:scale-110 transition-transform">JS</div>
                <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white font-medium text-sm hover:scale-110 transition-transform">KL</div>
                <div className="w-10 h-10 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center text-white font-medium text-sm hover:scale-110 transition-transform">AP</div>
                <div className="w-10 h-10 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-white font-medium text-sm hover:scale-110 transition-transform">MN</div>
                <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white font-medium text-sm hover:scale-110 transition-transform">+</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-marketplace-purple" />
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">5,000+</span> members
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-marketplace-green" />
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">1,200+</span> projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-fade-in transform hover:scale-105 transition-transform" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-marketplace-purple rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold">Project Matched!</span>
              </div>
              <p className="text-sm text-gray-600">AI matched Sarah with a Web Dev project at TechCorp</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-fade-in transform hover:scale-105 transition-transform" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-marketplace-orange rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold">Mentorship</span>
              </div>
              <p className="text-sm text-gray-600">Weekly mentoring sessions with industry experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
