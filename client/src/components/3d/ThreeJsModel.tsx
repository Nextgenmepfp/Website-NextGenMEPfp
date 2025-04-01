import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface ThreeJsModelProps {
  modelUrl?: string;
  className?: string;
}

export function ThreeJsModel({ modelUrl, className }: ThreeJsModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);
    
    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    
    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    
    // Basic example: Create a building-like geometry
    const buildingGeometry = new THREE.BoxGeometry(2, 3, 2);
    const buildingMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x4080ff,
      metalness: 0.2,
      roughness: 0.5
    });
    
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
    scene.add(building);
    
    // Add floors to the building
    for (let i = 0; i < 5; i++) {
      const floorGeometry = new THREE.BoxGeometry(2.1, 0.1, 2.1);
      const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.position.y = -1.5 + i * 0.7;
      scene.add(floor);
    }
    
    // Add a roof
    const roofGeometry = new THREE.ConeGeometry(1.5, 1, 4);
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0xcc4444 });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 2;
    roof.rotation.y = Math.PI / 4;
    scene.add(roof);
    
    // Add ground
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x88aa88,
      side: THREE.DoubleSide
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = Math.PI / 2;
    ground.position.y = -1.5;
    scene.add(ground);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update controls
      controls.update();
      
      // Gentle rotation
      building.rotation.y += 0.003;
      
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
  }, [modelUrl]);
  
  return (
    <div 
      ref={containerRef} 
      className={`w-full h-[400px] rounded-lg ${className || ''}`}
    ></div>
  );
}