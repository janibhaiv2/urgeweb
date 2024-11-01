'use client';
import { Canvas } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { useMotionValue, useTransform, useScroll } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { useTexture } from '@react-three/drei';

function MeshComponent({ scrollYProgress }) {
    // Load textures within the Canvas context
    const [color, normal, aoMap] = useTexture([
        '/assets/color.jpg',
        '/assets/normal.png',
        '/assets/occlusion.jpg'
    ]);

    return (
        <motion.mesh
            scale={2.5}
            rotation-y={scrollYProgress} // Bind rotation to scroll progress
        >
            <sphereGeometry args={[1, 150, 150]} />
            <meshStandardMaterial 
                map={color} 
                normalMap={normal} 
                aoMap={aoMap} 
            />
        </motion.mesh>
    );
}

export default function Earth() {
    const sceneRef = useRef(null);

    // Framer Motion's useScroll for scroll-based animation
    const { scrollYProgress } = useScroll({
        target: sceneRef,
        offset: ['start end', 'end start']
    });

    // Transform scrollYProgress to control rotation angle smoothly
    const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]); // Full rotation (0 to 360 degrees)

    return (
        <div ref={sceneRef} style={{ height: '100vh', width: '100vw' }}>
            <Canvas>
                <ambientLight intensity={0.2} />
                <directionalLight intensity={8.5} position={[1, 0, 0.4]} />
                <MeshComponent scrollYProgress={rotationY} />
            </Canvas>
        </div>
    );
}
