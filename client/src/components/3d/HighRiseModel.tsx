import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface HighRiseModelProps {
  name: string;
  floors: number;
  color?: string;
  className?: string;
}

export function HighRiseModel({ name, floors, color = '#4080ff', className }: HighRiseModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);
    
    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      50, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.set(15, 15, 15);
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    
    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.minDistance = 10;
    controls.maxDistance = 30;
    controls.maxPolarAngle = Math.PI / 2;
    
    // Create building group
    const building = new THREE.Group();
    
    // Building base
    const baseHeight = 1;
    const baseGeometry = new THREE.BoxGeometry(6, baseHeight, 6);
    const baseMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x888888,
      metalness: 0.2,
      roughness: 0.7
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = baseHeight / 2;
    base.castShadow = true;
    base.receiveShadow = true;
    building.add(base);
    
    // Main building
    const floorHeight = 0.5;
    const buildingHeight = floors * floorHeight;
    const buildingGeometry = new THREE.BoxGeometry(5, buildingHeight, 5);
    const buildingMaterial = new THREE.MeshStandardMaterial({ 
      color: new THREE.Color(color),
      metalness: 0.5,
      roughness: 0.3
    });
    const mainBuilding = new THREE.Mesh(buildingGeometry, buildingMaterial);
    mainBuilding.position.y = baseHeight + buildingHeight / 2;
    mainBuilding.castShadow = true;
    mainBuilding.receiveShadow = true;
    building.add(mainBuilding);
    
    // Windows
    const windowMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x333333,
      metalness: 0.9,
      roughness: 0.1
    });
    
    // Add windows to each side of building
    for (let floor = 0; floor < floors; floor++) {
      const y = baseHeight + floor * floorHeight + floorHeight / 2;
      
      // Front windows
      for (let i = 0; i < 4; i++) {
        const windowGeometry = new THREE.BoxGeometry(0.8, 0.3, 0.1);
        const window = new THREE.Mesh(windowGeometry, windowMaterial);
        window.position.set(-1.5 + i, y, 2.55);
        building.add(window);
      }
      
      // Back windows
      for (let i = 0; i < 4; i++) {
        const windowGeometry = new THREE.BoxGeometry(0.8, 0.3, 0.1);
        const window = new THREE.Mesh(windowGeometry, windowMaterial);
        window.position.set(-1.5 + i, y, -2.55);
        building.add(window);
      }
      
      // Left windows
      for (let i = 0; i < 4; i++) {
        const windowGeometry = new THREE.BoxGeometry(0.1, 0.3, 0.8);
        const window = new THREE.Mesh(windowGeometry, windowMaterial);
        window.position.set(-2.55, y, -1.5 + i);
        building.add(window);
      }
      
      // Right windows
      for (let i = 0; i < 4; i++) {
        const windowGeometry = new THREE.BoxGeometry(0.1, 0.3, 0.8);
        const window = new THREE.Mesh(windowGeometry, windowMaterial);
        window.position.set(2.55, y, -1.5 + i);
        building.add(window);
      }
    }
    
    // Add roof details
    const roofBaseGeometry = new THREE.BoxGeometry(5.5, 0.3, 5.5);
    const roofBaseMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 });
    const roofBase = new THREE.Mesh(roofBaseGeometry, roofBaseMaterial);
    roofBase.position.y = baseHeight + buildingHeight + 0.15;
    roofBase.castShadow = true;
    building.add(roofBase);
    
    // Roof structure
    const roofGeometry = new THREE.BoxGeometry(3, 1.5, 3);
    const roofMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x777777,
      metalness: 0.3,
      roughness: 0.6
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = baseHeight + buildingHeight + 1;
    roof.castShadow = true;
    building.add(roof);
    
    // Antenna
    const antennaGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2, 8);
    const antennaMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    antenna.position.y = baseHeight + buildingHeight + 2.5;
    antenna.castShadow = true;
    building.add(antenna);
    
    // Add ground
    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x88aa88,
      side: THREE.DoubleSide,
      roughness: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // Add building to scene
    scene.add(building);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 20, 15);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 100;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);
    
    // Add a hemisphere light for more natural lighting
    const hemisphereLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 0.5);
    scene.add(hemisphereLight);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update controls
      controls.update();
      
      // Gentle rotation of the building
      building.rotation.y += 0.002;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [floors, color]);
  
  return (
    <div className="flex flex-col">
      <div 
        ref={containerRef} 
        className={`w-full h-[350px] rounded-lg shadow-md ${className || ''}`}
      ></div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{floors} floors</p>
      </div>
    </div>
  );
}