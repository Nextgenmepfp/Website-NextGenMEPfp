import { useState } from "react";
import { projectImages } from "@/data/slider-images";
import { Button } from "@/components/ui/button";

type ProjectCategory = 'all' | 'commercial' | 'industrial' | 'institutional' | 'data-center';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projectImages 
    : projectImages.filter(project => project.category === activeFilter);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of prestigious projects we've had the privilege to work on
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button 
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </Button>
          <Button 
            variant={activeFilter === 'commercial' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('commercial')}
          >
            Commercial
          </Button>
          <Button 
            variant={activeFilter === 'institutional' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('institutional')}
          >
            Institutional
          </Button>
          <Button 
            variant={activeFilter === 'industrial' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('industrial')}
          >
            Industrial
          </Button>
          <Button 
            variant={activeFilter === 'data-center' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('data-center')}
          >
            Data Centers
          </Button>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}