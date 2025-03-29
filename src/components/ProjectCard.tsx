
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  company: string;
  companyLogo?: string;
  skills: string[];
  level: string;
  category: string;
  duration: string;
  budget?: string;
  deadline?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  company,
  companyLogo,
  skills,
  level,
  category,
  duration,
  budget,
  deadline
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
              {companyLogo ? (
                <img src={companyLogo} alt={company} className="h-full w-full object-cover" />
              ) : (
                <span className="text-gray-500 font-semibold">{company.charAt(0)}</span>
              )}
            </div>
            <span className="text-sm text-gray-600">{company}</span>
          </div>
          {deadline && (
            <span className="text-xs text-gray-500">
              Deadline: {deadline}
            </span>
          )}
        </div>
        
        <Link to={`/projects/${id}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-marketplace-purple transition-colors">{title}</h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.slice(0, 4).map((skill, index) => (
            <Badge key={index} variant="secondary" className="tag tag-skill">
              {skill}
            </Badge>
          ))}
          {skills.length > 4 && (
            <Badge variant="secondary" className="tag tag-skill">
              +{skills.length - 4} more
            </Badge>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="tag tag-level">
            {level}
          </Badge>
          <Badge variant="outline" className="tag tag-category">
            {category}
          </Badge>
          <Badge variant="outline" className="tag tag-duration">
            {duration}
          </Badge>
        </div>
        
        {budget && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-gray-600 text-sm">Budget:</span>
            <span className="font-semibold text-marketplace-purple">{budget}</span>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 px-6 py-3 flex justify-end">
        <Link to={`/projects/${id}`} className="text-sm font-medium text-marketplace-purple hover:text-marketplace-purple/80 transition-colors">
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
