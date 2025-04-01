import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface DataCenterModelProps {
  name: string;
  className?: string;
}

export function DataCenterModel({ name, className }: DataCenterModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    
    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      50, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.set(12, 8, 12);
    
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
    controls.minDistance = 8;
    controls.maxDistance = 20;
    controls.maxPolarAngle = Math.PI / 2;
    
    // Create data center group
    const dataCenter = new THREE.Group();
    
    // Main building structure
    const buildingGeometry = new THREE.BoxGeometry(10, 3, 8);
    const buildingMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x607d8b, // Blue-grey for a tech look
      metalness: 0.4,
      roughness: 0.6
    });
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
    building.position.y = 1.5;
    building.castShadow = true;
    building.receiveShadow = true;
    dataCenter.add(building);
    
    // Roof
    const roofGeometry = new THREE.BoxGeometry(10.5, 0.5, 8.5);
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x455a64 });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 3.25;
    roof.castShadow = true;
    dataCenter.add(roof);
    
    // HVAC units on roof
    for (let i = 0; i < 3; i++) {
      const hvacGeometry = new THREE.BoxGeometry(1.5, 1, 1.5);
      const hvacMaterial = new THREE.MeshStandardMaterial({ color: 0x90a4ae });
      const hvac = new THREE.Mesh(hvacGeometry, hvacMaterial);
      hvac.position.set(-3 + i * 3, 3.75, -2);
      hvac.castShadow = true;
      dataCenter.add(hvac);
    }
    
    // Entrance
    const entranceGeometry = new THREE.BoxGeometry(2, 2, 1);
    const entranceMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x78909c,
      metalness: 0.6,
      roughness: 0.2
    });
    const entrance = new THREE.Mesh(entranceGeometry, entranceMaterial);
    entrance.position.set(0, 1, 4.5);
    entrance.castShadow = true;
    dataCenter.add(entrance);
    
    // Door
    const doorGeometry = new THREE.PlaneGeometry(1.2, 1.8);
    const doorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x263238,
      side: THREE.DoubleSide
    });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 1, 5.01);
    dataCenter.add(door);
    
    // Windows
    for (let i = 0; i < 4; i++) {
      // Front windows
      const windowGeometry = new THREE.PlaneGeometry(1, 0.8);
      const windowMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xb0bec5,
        metalness: 0.9,
        roughness: 0.1,
        side: THREE.DoubleSide
      });
      
      if (i !== 1) { // Skip middle position where the door is
        const frontWindow = new THREE.Mesh(windowGeometry, windowMaterial);
        frontWindow.position.set(-3 + i * 2, 1.8, 4.01);
        dataCenter.add(frontWindow);
      }
      
      // Side windows
      const sideWindow1 = new THREE.Mesh(windowGeometry, windowMaterial);
      sideWindow1.position.set(5.01, 1.8, -2 + i * 1.5);
      sideWindow1.rotation.y = Math.PI / 2;
      dataCenter.add(sideWindow1);
      
      const sideWindow2 = new THREE.Mesh(windowGeometry, windowMaterial);
      sideWindow2.position.set(-5.01, 1.8, -2 + i * 1.5);
      sideWindow2.rotation.y = Math.PI / 2;
      dataCenter.add(sideWindow2);
    }
    
    // Add server racks (visible through windows)
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        const rackGeometry = new THREE.BoxGeometry(0.8, 1.8, 0.8);
        const rackMaterial = new THREE.MeshStandardMaterial({ color: 0x212121 });
        const rack = new THREE.Mesh(rackGeometry, rackMaterial);
        rack.position.set(-3 + i * 2.5, 1, -2 + j * 1.2);
        dataCenter.add(rack);
        
        // Add blinking lights to racks
        const lightGeometry = new THREE.SphereGeometry(0.03, 8, 8);
        const lightMaterial = new THREE.MeshBasicMaterial({ color: 0x4caf50 }); // Green lights
        
        for (let k = 0; k < 3; k++) {
          const light = new THREE.Mesh(lightGeometry, lightMaterial);
          light.position.set(-3 + i * 2.5, 0.6 + k * 0.5, -1.6 + j * 1.2);
          dataCenter.add(light);
          
          // Blinking animation
          if (Math.random() > 0.7) {
            setInterval(() => {
              light.material.color.setHex(Math.random() > 0.5 ? 0x4caf50 : 0xf44336);
            }, 1000 + Math.random() * 2000);
          }
        }
      }
    }
    
    // Add security cameras
    for (let i = 0; i < 2; i++) {
      const cameraBaseGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 8);
      const cameraMaterial = new THREE.MeshStandardMaterial({ color: 0x424242 });
      const cameraBase = new THREE.Mesh(cameraBaseGeometry, cameraMaterial);
      cameraBase.position.set(-4 + i * 8, 2.8, 3.9);
      cameraBase.rotation.x = Math.PI / 2;
      dataCenter.add(cameraBase);
      
      const cameraBodyGeometry = new THREE.CylinderGeometry(0.08, 0.12, 0.3, 8);
      const cameraBody = new THREE.Mesh(cameraBodyGeometry, cameraMaterial);
      cameraBody.position.set(-4 + i * 8, 2.8, 4.1);
      cameraBody.rotation.x = Math.PI / 2;
      dataCenter.add(cameraBody);
    }
    
    // Add parking lot
    const parkingLotGeometry = new THREE.PlaneGeometry(15, 10);
    const parkingLotMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x37474f,
      side: THREE.DoubleSide,
      roughness: 0.9
    });
    const parkingLot = new THREE.Mesh(parkingLotGeometry, parkingLotMaterial);
    parkingLot.rotation.x = Math.PI / 2;
    parkingLot.position.y = 0.01;
    parkingLot.position.z = 9;
    parkingLot.receiveShadow = true;
    scene.add(parkingLot);
    
    // Add ground
    const groundGeometry = new THREE.PlaneGeometry(40, 40);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x689f38,
      side: THREE.DoubleSide,
      roughness: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // Add data center to scene
    scene.add(dataCenter);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -15;
    directionalLight.shadow.camera.right = 15;
    directionalLight.shadow.camera.top = 15;
    directionalLight.shadow.camera.bottom = -15;
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
      dataCenter.rotation.y += 0.001;
      
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
        <p className="text-sm text-gray-600">Data Center & Infrastructure</p>
      </div>
    </div>
  );
}