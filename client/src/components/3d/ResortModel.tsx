import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface ResortModelProps {
  name: string;
  className?: string;
}

export function ResortModel({ name, className }: ResortModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xb3e0ff); // Light blue sky
    
    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      50, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.set(15, 10, 15);
    
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
    
    // Create resort group
    const resort = new THREE.Group();
    
    // Main hotel building
    const hotelGeometry = new THREE.BoxGeometry(12, 8, 6);
    const hotelMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xfaebda, // Cream/beige color for resort building
      metalness: 0.1,
      roughness: 0.8
    });
    const hotel = new THREE.Mesh(hotelGeometry, hotelMaterial);
    hotel.position.y = 4;
    hotel.position.x = -5;
    hotel.castShadow = true;
    hotel.receiveShadow = true;
    resort.add(hotel);
    
    // Hotel roof
    const roofGeometry = new THREE.BoxGeometry(12.5, 0.5, 6.5);
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0xd46060 }); // Terracotta roof
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 8.25;
    roof.position.x = -5;
    roof.castShadow = true;
    resort.add(roof);
    
    // Windows for hotel
    const windowMaterial = new THREE.MeshStandardMaterial({
      color: 0x6fbce1,
      metalness: 0.2,
      roughness: 0.1
    });
    
    // Add windows to the hotel
    for (let floor = 0; floor < 3; floor++) {
      for (let i = 0; i < 5; i++) {
        // Front windows
        const frontWindow = new THREE.Mesh(
          new THREE.PlaneGeometry(1, 1.2),
          windowMaterial
        );
        frontWindow.position.set(-9 + i * 2, 2 + floor * 2.5, 3.01);
        resort.add(frontWindow);
        
        // Back windows
        const backWindow = new THREE.Mesh(
          new THREE.PlaneGeometry(1, 1.2),
          windowMaterial
        );
        backWindow.position.set(-9 + i * 2, 2 + floor * 2.5, -3.01);
        backWindow.rotation.y = Math.PI;
        resort.add(backWindow);
        
        if (i < 3) {
          // Side windows
          const sideWindow1 = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1.2),
            windowMaterial
          );
          sideWindow1.position.set(-11.01, 2 + floor * 2.5, -2 + i * 2);
          sideWindow1.rotation.y = -Math.PI / 2;
          resort.add(sideWindow1);
          
          const sideWindow2 = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1.2),
            windowMaterial
          );
          sideWindow2.position.set(1.01, 2 + floor * 2.5, -2 + i * 2);
          sideWindow2.rotation.y = Math.PI / 2;
          resort.add(sideWindow2);
        }
      }
    }
    
    // Swimming pool
    const poolGeometry = new THREE.BoxGeometry(8, 0.5, 6);
    const poolMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x4fc3f7, // Light blue water
      metalness: 0.3,
      roughness: 0.2
    });
    const pool = new THREE.Mesh(poolGeometry, poolMaterial);
    pool.position.set(5, 0.25, 0);
    pool.receiveShadow = true;
    resort.add(pool);
    
    // Pool deck
    const deckGeometry = new THREE.BoxGeometry(10, 0.1, 8);
    const deckMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xd7ccc8, // Light stone color
      roughness: 0.9
    });
    const deck = new THREE.Mesh(deckGeometry, deckMaterial);
    deck.position.set(5, 0.05, 0);
    deck.receiveShadow = true;
    resort.add(deck);
    
    // Umbrella stands around pool
    const umbrellaColors = [0xe53935, 0x43a047, 0x1e88e5];
    for (let i = 0; i < 4; i++) {
      // Create umbrella pole
      const poleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5, 8);
      const poleMaterial = new THREE.MeshStandardMaterial({ color: 0xbdbdbd });
      const pole = new THREE.Mesh(poleGeometry, poleMaterial);
      
      // Create umbrella top
      const umbrellaGeometry = new THREE.ConeGeometry(1, 0.5, 16, 1, true);
      const umbrellaMaterial = new THREE.MeshStandardMaterial({ 
        color: umbrellaColors[i % umbrellaColors.length],
        side: THREE.DoubleSide
      });
      const umbrella = new THREE.Mesh(umbrellaGeometry, umbrellaMaterial);
      umbrella.position.y = 0.75;
      umbrella.rotation.x = Math.PI;
      
      // Create umbrella group
      const umbrellaSet = new THREE.Group();
      umbrellaSet.add(pole);
      umbrellaSet.add(umbrella);
      
      // Position around pool
      if (i < 2) {
        umbrellaSet.position.set(2 + i * 6, 0.75, -3.5);
      } else {
        umbrellaSet.position.set(2 + (i-2) * 6, 0.75, 3.5);
      }
      
      umbrellaSet.castShadow = true;
      resort.add(umbrellaSet);
    }
    
    // Beach area
    const beachGeometry = new THREE.PlaneGeometry(30, 15);
    const beachMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xf5e7ca, // Sand color
      side: THREE.DoubleSide,
      roughness: 1
    });
    const beach = new THREE.Mesh(beachGeometry, beachMaterial);
    beach.rotation.x = Math.PI / 2;
    beach.position.y = 0;
    beach.position.z = 10;
    beach.receiveShadow = true;
    scene.add(beach);
    
    // Ocean
    const oceanGeometry = new THREE.PlaneGeometry(60, 30);
    const oceanMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x0288d1, // Deep blue
      side: THREE.DoubleSide,
      metalness: 0.3,
      roughness: 0.4
    });
    const ocean = new THREE.Mesh(oceanGeometry, oceanMaterial);
    ocean.rotation.x = Math.PI / 2;
    ocean.position.y = -0.1;
    ocean.position.z = 25;
    scene.add(ocean);
    
    // Palm trees
    const createPalmTree = (x: number, z: number) => {
      // Trunk
      const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, 3, 8);
      const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8d6e63 });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.set(x, 1.5, z);
      trunk.castShadow = true;
      resort.add(trunk);
      
      // Leaves
      const leafMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x66bb6a,
        side: THREE.DoubleSide
      });
      
      for (let i = 0; i < 5; i++) {
        const leafGeometry = new THREE.PlaneGeometry(2, 1);
        const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
        leaf.position.set(x, 3 + Math.random() * 0.5, z);
        leaf.rotation.x = Math.PI / 4;
        leaf.rotation.y = (i / 5) * Math.PI * 2;
        leaf.rotation.z = Math.PI / 6;
        leaf.castShadow = true;
        resort.add(leaf);
      }
    };
    
    // Add several palm trees
    createPalmTree(8, 6);
    createPalmTree(2, 7);
    createPalmTree(-8, 4);
    createPalmTree(-12, -2);
    createPalmTree(10, -5);
    
    // Add walkways
    const walkwayGeometry = new THREE.PlaneGeometry(2, 6);
    const walkwayMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xd7ccc8,
      side: THREE.DoubleSide
    });
    const walkway = new THREE.Mesh(walkwayGeometry, walkwayMaterial);
    walkway.rotation.x = Math.PI / 2;
    walkway.position.y = 0.01;
    walkway.position.x = -1;
    walkway.receiveShadow = true;
    resort.add(walkway);
    
    // Add ground
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x81c784, // Green grass
      side: THREE.DoubleSide,
      roughness: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = Math.PI / 2;
    ground.position.y = -0.01;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // Add resort to scene
    scene.add(resort);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffcc, 1); // Warm sunlight
    directionalLight.position.set(10, 15, 8);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);
    
    // Add a hemisphere light for more natural lighting
    const hemisphereLight = new THREE.HemisphereLight(0xaaeeff, 0x777788, 0.6);
    scene.add(hemisphereLight);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update controls
      controls.update();
      
      // Gentle rotation of the resort
      resort.rotation.y += 0.001;
      
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
  }, []);
  
  return (
    <div className="flex flex-col">
      <div 
        ref={containerRef} 
        className={`w-full h-[350px] rounded-lg shadow-md ${className || ''}`}
      ></div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">Luxury Resort & Spa</p>
      </div>
    </div>
  );
}