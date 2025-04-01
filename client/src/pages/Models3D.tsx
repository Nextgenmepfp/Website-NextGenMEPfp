import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HighRiseModel } from "@/components/3d/HighRiseModel";
import { DataCenterModel } from "@/components/3d/DataCenterModel";
import { ResortModel } from "@/components/3d/ResortModel";

type ModelCategory = 'all' | 'commercial' | 'data-center' | 'resort';

export default function Models3D() {
  const [activeCategory, setActiveCategory] = useState<ModelCategory>('all');
  
  // Helper function to check if a model should be shown based on the active category
  const showModel = (category: ModelCategory): boolean => {
    return activeCategory === 'all' || activeCategory === category;
  };
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Interactive 3D Models</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our engineering capabilities through interactive 3D models of notable projects
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Use your mouse to rotate, zoom, and interact with the models
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button 
            variant={activeCategory === 'all' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveCategory('all')}
          >
            All Models
          </Button>
          <Button 
            variant={activeCategory === 'commercial' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveCategory('commercial')}
          >
            High-Rise Buildings
          </Button>
          <Button 
            variant={activeCategory === 'data-center' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveCategory('data-center')}
          >
            Data Centers
          </Button>
          <Button 
            variant={activeCategory === 'resort' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveCategory('resort')}
          >
            Resorts & Entertainment
          </Button>
        </div>
        
        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Commercial High-Rise Buildings */}
          {showModel('commercial') && (
            <>
              <HighRiseModel 
                name="100 Las Olas" 
                floors={46} 
                color="#2c577a" 
              />
              <HighRiseModel 
                name="St. Regis Bal Harbour" 
                floors={27} 
                color="#8e766b" 
              />
              <HighRiseModel 
                name="Trump International" 
                floors={32} 
                color="#a08159" 
              />
            </>
          )}
          
          {/* Data Centers */}
          {showModel('data-center') && (
            <>
              <DataCenterModel name="Anderson Air Force Base Data Center" />
              <DataCenterModel name="Enterprise Cloud Infrastructure" />
              <DataCenterModel name="Financial Services Data Center" />
            </>
          )}
          
          {/* Resorts & Entertainment */}
          {showModel('resort') && (
            <>
              <ResortModel name="Marriott Kauai Resort" />
              <ResortModel name="Cheeca Lodge & Spa" />
              <ResortModel name="Sea World Orlando" />
            </>
          )}
        </div>
        
        {/* Technical Information Section */}
        <div className="mt-20 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Engineering Approach</h2>
          <p className="mb-4">
            At NEXTGEN MEPfp, we utilize advanced 3D modeling and BIM (Building Information Modeling) 
            techniques for all our engineering projects. This approach allows us to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Detect and resolve conflicts between different building systems before construction</li>
            <li>Optimize mechanical, electrical, and plumbing layouts for efficiency</li>
            <li>Provide precise coordination with architectural and structural elements</li>
            <li>Create detailed documentation for contractors and facility managers</li>
            <li>Reduce construction costs and minimize change orders</li>
          </ul>
          
          <h3 className="text-xl font-bold mb-2">Low Voltage Systems Integration</h3>
          <p className="mb-6">
            Our expertise in low voltage systems is integrated into our 3D models, showing how telecommunications, 
            security, fire alarm, and building automation systems work together within the building envelope.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button className="bg-primary hover:bg-primary/90">
              <a href="/contact">Discuss Your Project</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}