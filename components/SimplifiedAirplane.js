'use client';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, Text, useGLTF, useAnimations } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Color, LoopRepeat } from 'three';

gsap.registerPlugin(ScrollTrigger);

// Airplane Component
const Airplane = ({ airplaneRef, position }) => {
  const { scene, animations } = useGLTF('/models/low_poly_spitfire_airplane.glb');
  const { actions } = useAnimations(animations, airplaneRef);
  const clockRef = useRef(0);

  // Setup airplane and animations
  useEffect(() => {
    if (airplaneRef.current) {
      // Set initial position
      airplaneRef.current.position.set(position[0], position[1], position[2]);

      // Change airplane color to red
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(material => {
              if (material.color) {
                material.color.set('#cc3333');
                material.needsUpdate = true;
              }
            });
          } else if (child.material.color) {
            child.material.color.set('#cc3333');
            child.material.needsUpdate = true;
          }
        }
      });

      // Start propeller animation
      console.log('Available animations:', Object.keys(actions));

      // Try all possible propeller animation names
      if (actions.Propeller) {
        console.log('Playing Propeller animation');
        actions.Propeller.reset().play();
        actions.Propeller.setLoop(LoopRepeat);
        actions.Propeller.setEffectiveTimeScale(2.0); // Speed up more
      } else if (actions.PropellerAction) {
        console.log('Playing PropellerAction animation');
        actions.PropellerAction.reset().play();
        actions.PropellerAction.setLoop(LoopRepeat);
        actions.PropellerAction.setEffectiveTimeScale(2.0); // Speed up more
      } else {
        // Try to find any animation that might be the propeller
        const propellerAnimation = Object.keys(actions).find(name =>
          name.toLowerCase().includes('propeller') ||
          name.toLowerCase().includes('rotor') ||
          name.toLowerCase().includes('spin')
        );

        if (propellerAnimation) {
          console.log(`Playing found animation: ${propellerAnimation}`);
          actions[propellerAnimation].reset().play();
          actions[propellerAnimation].setLoop(LoopRepeat);
          actions[propellerAnimation].setEffectiveTimeScale(2.0);
        } else {
          console.warn('No propeller animation found in the model');
          // If no specific propeller animation found, try playing all animations
          Object.keys(actions).forEach(name => {
            console.log(`Trying to play animation: ${name}`);
            actions[name].reset().play();
            actions[name].setLoop(LoopRepeat);
          });
        }
      }
    }
  }, [position, actions, scene]);

  // Floating effect
  useFrame((_, delta) => {
    clockRef.current += delta;
    if (clockRef.current > 0.05) {
      if (airplaneRef.current) {
        airplaneRef.current.position.y = position[1] + Math.sin(clockRef.current) * 0.3;
      }
      clockRef.current = 0;
    }
  });

  return (
    <group ref={airplaneRef} position={position} scale={0.5} rotation={[0, Math.PI / 1, 0]}>
      <primitive object={scene} />
    </group>
  );
};

// Camera Animation
const CameraAnimation = ({ setControlsEnabled, airplaneRef }) => {
  const { camera } = useThree();
  const clockRef = useRef(0);

  useEffect(() => {
    if (!airplaneRef.current) return;

    // Initialize camera
    camera.position.set(0, 0, 10);
    camera.rotation.set(0, 0, 0);
    setControlsEnabled(false);

    // Scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#canvas-container',
        start: 'top top',
        end: '400%',
        scrub: true,
        pin: '#canvas-container',
        onUpdate: () => setControlsEnabled(false),
        onComplete: () => setControlsEnabled(true),
      },
    });

    // Animate camera and airplane
    tl.to(camera.position, { z: 0, ease: 'power1.out' }, 0);
    tl.to(airplaneRef.current.rotation, { x: 0.6, ease: 'power1.out' }, 0);
    tl.to(airplaneRef.current.position, { x: 5, ease: 'power1.out' }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [camera, setControlsEnabled, airplaneRef]);

  // Camera floating effect
  useFrame(() => {
    if (camera && airplaneRef.current) {
      clockRef.current += 0.03;
      camera.position.y = Math.sin(clockRef.current) * 0.2;
    }
  });

  return null;
};



// Heading
const Heading = ({ headingRef }) => {
  const fontSize = window.innerWidth > 768 ? 1.5 : 0.3;

  return (
    <Text
      ref={headingRef}
      position={[0, 0, 2]}
      fontSize={fontSize}
      font="./fonts/PPNEUEMONTREAL-MEDIUM.88EE7C9.woff2"
      color="#101010"
      anchorX="center"
      anchorY="middle"
    >
      URGE OF IMMIGRATION
    </Text>
  );
};

// Main Component
export default function Model() {
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const airplaneRef = useRef();
  const headingRef = useRef();
  const [initialPosition] = useState([20, -3, -1]);

  // Smooth scrolling with Lenis removed

  return (
    <div id="canvas-container" style={{ height: '100vh', backgroundColor: '#BBBBBB' }}>
      <Canvas>
        <CameraAnimation setControlsEnabled={setControlsEnabled} airplaneRef={airplaneRef} />
        {controlsEnabled && <OrbitControls enableZoom={false} />}
        <directionalLight position={[16, 2, 0]} intensity={8} />
        <Airplane airplaneRef={airplaneRef} position={initialPosition} />
        <Heading headingRef={headingRef} />
      </Canvas>
    </div>
  );
}

// Preload model
useGLTF.preload('/models/low_poly_spitfire_airplane.glb');
