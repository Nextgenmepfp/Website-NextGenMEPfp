import { useState } from "react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectCategory = 'all' | 'commercial' | 'industrial' | 'institutional' | 'data-center';

export function ProjectPortfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  const handleFilterChange = (filter: ProjectCategory) => {
    setActiveFilter(filter);
    setVisibleProjects(6);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our completed projects across various industries and see our expertise in action.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeFilter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-neutral-200 text-secondary hover:bg-neutral-300'
            }`}
            onClick={() => handleFilterChange('all')}
          >
            All Projects
          </Button>
          <Button
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeFilter === 'commercial' 
                ? 'bg-primary text-white' 
                : 'bg-neutral-200 text-secondary hover:bg-neutral-300'
            }`}
            onClick={() => handleFilterChange('commercial')}
          >
            Commercial
          </Button>
          <Button
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeFilter === 'industrial' 
                ? 'bg-primary text-white' 
                : 'bg-neutral-200 text-secondary hover:bg-neutral-300'
            }`}
            onClick={() => handleFilterChange('industrial')}
          >
            Industrial
          </Button>
          <Button
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeFilter === 'institutional' 
                ? 'bg-primary text-white' 
                : 'bg-neutral-200 text-secondary hover:bg-neutral-300'
            }`}
            onClick={() => handleFilterChange('institutional')}
          >
            Institutional
          </Button>
          <Button
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeFilter === 'data-center' 
                ? 'bg-primary text-white' 
                : 'bg-neutral-200 text-secondary hover:bg-neutral-300'
            }`}
            onClick={() => handleFilterChange('data-center')}
          >
            Data Centers
          </Button>
        </div>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <Card
              key={project.id}
              className="rounded-lg overflow-hidden shadow-md group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-primary text-white py-2 px-4 rounded-lg font-medium">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <div className="flex items-center">
                  <Badge className="text-xs font-medium bg-neutral-200 rounded-full">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1).replace('-', ' ')}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-10">
            <Button 
              className="bg-primary text-white py-3 px-8 rounded-lg font-medium hover:bg-opacity-90 transition"
              onClick={loadMoreProjects}
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
