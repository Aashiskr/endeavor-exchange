
import { CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "🔍",
      title: "Find Projects",
      description: "Browse through a wide range of projects posted by companies and organizations."
    },
    {
      icon: "🤝",
      title: "Collaborate",
      description: "Work with teams and mentors in a collaborative environment to build solutions."
    },
    {
      icon: "💼",
      title: "Gain Experience",
      description: "Build your portfolio with real-world projects and develop valuable skills."
    },
    {
      icon: "🚀",
      title: "Grow Your Career",
      description: "Use your experience and connections to advance your career or freelance business."
    }
  ];

  return (
    <section className="py-16 bg-marketplace-lavender/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform makes it easy to find projects, collaborate with others, and grow your skills and career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">For Companies</h3>
              <p className="text-gray-600 mb-6">
                Post projects, find talented individuals, and get quality work done while helping students and freelancers grow.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-marketplace-green mt-0.5 flex-shrink-0" />
                  <span>Access a diverse pool of skilled talent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-marketplace-green mt-0.5 flex-shrink-0" />
                  <span>Cost-effective project completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-marketplace-green mt-0.5 flex-shrink-0" />
                  <span>Discover potential employees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-marketplace-green mt-0.5 flex-shrink-0" />
                  <span>Contribute to education and career development</span>
                </li>
              </ul>
            </div>
            <div className="bg-marketplace-purple/10 p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">For Students & Freelancers</h3>
              <p className="text-gray-600 mb-6">
                Find real-world projects, build your portfolio, and connect with potential employers or clients.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-marketplace-purple mt-0.5 flex-shrink-0" />
                  <span>Work on meaningful projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-marketplace-purple mt-0.5 flex-shrink-0" />
                  <span>Receive mentorship from industry professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-marketplace-purple mt-0.5 flex-shrink-0" />
                  <span>Showcase your work to potential employers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-marketplace-purple mt-0.5 flex-shrink-0" />
                  <span>Build your network and discover opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
