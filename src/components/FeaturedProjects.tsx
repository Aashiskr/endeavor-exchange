
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";

// Sample data for projects
const projectsData = {
  all: [
    {
      id: "1",
      title: "Mobile App for Health Tracking",
      description: "Design and develop a mobile application for tracking health metrics including exercise, nutrition, and sleep patterns with data visualization.",
      company: "HealthTech Inc",
      companyLogo: "https://randomuser.me/api/portraits/men/32.jpg",
      skills: ["React Native", "Firebase", "UI/UX Design", "API Integration"],
      level: "Intermediate",
      category: "Mobile Development",
      duration: "3-4 months",
      budget: "$3,000 - $5,000",
      deadline: "Jul 30, 2023"
    },
    {
      id: "2",
      title: "E-commerce Platform Redesign",
      description: "Revamp the user interface and improve the user experience of an existing e-commerce platform to increase conversion rates and customer satisfaction.",
      company: "ShopSmart",
      skills: ["UI/UX", "Figma", "HTML/CSS", "JavaScript"],
      level: "Intermediate",
      category: "Web Design",
      duration: "1-2 months",
      budget: "$2,000 - $3,500"
    },
    {
      id: "3",
      title: "Data Analysis for Market Research",
      description: "Analyze customer data and market trends to provide actionable insights for a company's marketing strategy and product development.",
      company: "Market Insights",
      companyLogo: "https://randomuser.me/api/portraits/women/44.jpg",
      skills: ["Python", "Data Analysis", "Visualization", "Statistics"],
      level: "Advanced",
      category: "Data Science",
      duration: "2-3 months",
      budget: "$4,000 - $6,000",
      deadline: "Aug 15, 2023"
    },
    {
      id: "4",
      title: "Content Management System Development",
      description: "Build a custom CMS for a media company to streamline content creation, editing, and publishing workflows across multiple platforms.",
      company: "MediaPulse",
      skills: ["Node.js", "React", "MongoDB", "AWS"],
      level: "Advanced",
      category: "Full Stack Development",
      duration: "4-6 months",
      budget: "$7,000 - $10,000"
    }
  ],
  webDev: [
    {
      id: "2",
      title: "E-commerce Platform Redesign",
      description: "Revamp the user interface and improve the user experience of an existing e-commerce platform to increase conversion rates and customer satisfaction.",
      company: "ShopSmart",
      skills: ["UI/UX", "Figma", "HTML/CSS", "JavaScript"],
      level: "Intermediate",
      category: "Web Design",
      duration: "1-2 months",
      budget: "$2,000 - $3,500"
    },
    {
      id: "4",
      title: "Content Management System Development",
      description: "Build a custom CMS for a media company to streamline content creation, editing, and publishing workflows across multiple platforms.",
      company: "MediaPulse",
      skills: ["Node.js", "React", "MongoDB", "AWS"],
      level: "Advanced",
      category: "Full Stack Development",
      duration: "4-6 months",
      budget: "$7,000 - $10,000"
    }
  ],
  mobileDev: [
    {
      id: "1",
      title: "Mobile App for Health Tracking",
      description: "Design and develop a mobile application for tracking health metrics including exercise, nutrition, and sleep patterns with data visualization.",
      company: "HealthTech Inc",
      companyLogo: "https://randomuser.me/api/portraits/men/32.jpg",
      skills: ["React Native", "Firebase", "UI/UX Design", "API Integration"],
      level: "Intermediate",
      category: "Mobile Development",
      duration: "3-4 months",
      budget: "$3,000 - $5,000",
      deadline: "Jul 30, 2023"
    }
  ],
  dataScience: [
    {
      id: "3",
      title: "Data Analysis for Market Research",
      description: "Analyze customer data and market trends to provide actionable insights for a company's marketing strategy and product development.",
      company: "Market Insights",
      companyLogo: "https://randomuser.me/api/portraits/women/44.jpg",
      skills: ["Python", "Data Analysis", "Visualization", "Statistics"],
      level: "Advanced",
      category: "Data Science",
      duration: "2-3 months",
      budget: "$4,000 - $6,000",
      deadline: "Aug 15, 2023"
    }
  ]
};

const FeaturedProjects = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover exciting projects from companies looking for talented individuals to collaborate with.
          </p>
        </div>
        
        <Tabs defaultValue="all" onValueChange={setSelectedTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all" className="px-6">All Projects</TabsTrigger>
              <TabsTrigger value="webDev" className="px-6">Web Development</TabsTrigger>
              <TabsTrigger value="mobileDev" className="px-6">Mobile Apps</TabsTrigger>
              <TabsTrigger value="dataScience" className="px-6">Data Science</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projectsData.all.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="webDev" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projectsData.webDev.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mobileDev" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projectsData.mobileDev.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="dataScience" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projectsData.dataScience.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <Link to="/projects" className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-marketplace-purple rounded-md hover:bg-marketplace-purple/90 focus:shadow-outline focus:outline-none">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";

export default FeaturedProjects;
