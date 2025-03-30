
import { useState } from "react";
import { projectImages } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Project = {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  category: string;
  details?: string;
};

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of prestigious projects we've had the privilege to work on
          </p>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectImages.map((project) => (
            <div 
              key={project.id}
              className="rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
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
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={selectedProject?.image}
                alt={selectedProject?.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-gray-500 mb-2">{selectedProject?.location}</p>
              <p className="text-gray-700">{selectedProject?.description}</p>
              {selectedProject?.details && (
                <p className="mt-2 text-sm text-gray-600">{selectedProject.details}</p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
