import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hero/HeroStyles.module.css";

import logo from "./The_Bots_GIF.gif";

import SourceAnimation from "./Animations/SourceAnimation";
import { useSpring, a } from "@react-spring/three";
import { Canvas, useFrame } from "@react-three/fiber";
// Deai - R3F
import {
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";

// soft Shadows
softShadows();

const SpinningMesh = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    <a.mesh
      position={position}
      ref={mesh}
      // onClick={() => setExpand(!expand)}
      // scale={props.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach="material"
        factor={0.6}
      />
    </a.mesh>

    //Using Drei box if you want
    // <Box {...props} ref={mesh} castShadow>
    //   <MeshWobbleMaterial
    //     {...props}
    //     attach='material'
    //     factor={0.6}
    //     Speed={1}
    //   />
    // </Box>
  );
};

export default function HeroPage() {
  return (
    <>
      <motion.div
        className={styles.hero_container}
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        <h2>
          Welcome to Bots Artifact - Explore the world of Science and Technology
        </h2>
      </motion.div>

      {/* <motion.div
        className={styles.hero_container}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h1>hero image </h1>
       <img style={{ border: '1px solid white', borderRadius: '120px', width: '34%'}} src={logo} /> 
      </motion.div> */}
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={styles.hero_img}
      >
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [5, 9, 10], fov: 40 }}
      >
       <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 20, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          <SpinningMesh
            position={[1, -1, 0]}
            color="lime"
            args={[3, 3, 8]}
            speed={8}
          />
        </group>
       <OrbitControls />
      </Canvas>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={styles.hero_landing1}
      >
        <div className={styles.item_text}>
          <h2>Play games to gain a better understanding </h2>
        </div>
        <div className={styles.item_button}>
          {/* <button className={styles.pushable}>
            <span className={styles.front}>Play</span>
          </button> */}
          <Canvas
            colorManagement
            shadowMap
            camera={{ position: [-5, 2, 10], fov: 20 }}
          >
            {/* This light makes things look pretty */}
            <ambientLight intensity={0.3} />
            {/* Our main source of light, also casting our shadow */}
            <directionalLight
              castShadow
              position={[0, 20, 0]}
              intensity={1.5}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            {/* A light to help illumnate the spinning boxes */}
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <group>
              {/* This mesh is the plane (The floor) */}
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -3, 0]}
                receiveShadow
              >
                <planeBufferGeometry attach="geometry" args={[100, 100]} />
                <shadowMaterial attach="material" opacity={0.3} />
              </mesh>
    
              <SpinningMesh
                

                position={[0, 0.02, 0]}
                color="orange"
                args={[0.5, 2, 1]}
                speed={2}
              />
              <SpinningMesh position={[5, 1, -2]} color="magenta" speed={6} />
            </group>
            {/* Allows us to move the canvas around for different prespectives */}
            <OrbitControls />
          </Canvas>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={styles.hero_landing1}
      >
        <div className={styles.item_button}>
          {/* <button className={styles.pushable}>
  <span className={styles.front}>
    Blog
  </span>
</button> */}
          <Canvas
            colorManagement
            shadowMap
            camera={{ position: [-5, 2, 10], fov: 20 }}
          >
            {/* This light makes things look pretty */}
            <ambientLight intensity={0.3} />
            {/* Our main source of light, also casting our shadow */}
            <directionalLight
              castShadow
              position={[0, 20, 0]}
              intensity={1.5}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            {/* A light to help illumnate the spinning boxes */}
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <group>
              {/* This mesh is the plane (The floor) */}
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -3, 0]}
                receiveShadow
              >
                <planeBufferGeometry attach="geometry" args={[100, 100]} />
                <shadowMaterial attach="material" opacity={0.3} />
              </mesh>
              <SpinningMesh
                position={[0, 0.02, 0]}
                color="lime"
                args={[3, 2, 1]}
                speed={2}
              />
       
              <SpinningMesh position={[5, 1, -2]} color="navy" speed={6} />
            </group>
            {/* Allows us to move the canvas around for different prespectives */}
            <OrbitControls />
          </Canvas>
        </div>

        <div className={styles.item_text}>
          <h2>Check out the blog to tickle your brain</h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={styles.hero_landing1}
      >
        <div className={styles.item_text}>
          <h2>Shop designs</h2>
        </div>
        <div className={styles.item_button}>
          {/*
          <button className={styles.pushable}>
  <span className={styles.front}>
    Shop
  </span>
         </button>*/}

          <Canvas
            colorManagement
            shadowMap
            camera={{ position: [-5, 2, 10], fov: 20 }}
          >
            {/* This light makes things look pretty */}
            <ambientLight intensity={0.3} />
            {/* Our main source of light, also casting our shadow */}
            <directionalLight
              castShadow
              position={[0, 20, 0]}
              intensity={1.5}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            {/* A light to help illumnate the spinning boxes */}
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <group>
              {/* This mesh is the plane (The floor) */}
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -3, 0]}
                receiveShadow
              >
                <planeBufferGeometry attach="geometry" args={[100, 100]} />
                <shadowMaterial attach="material" opacity={0.3} />
              </mesh>
      
              <SpinningMesh
                position={[-2, 1, -5]}
                color="lightblue"
                speed={6}
              />
              <SpinningMesh position={[3, 1, -2]} color="magenta" speed={6} />
            </group>
            {/* Allows us to move the canvas around for different prespectives */}
            <OrbitControls />
          </Canvas>
        </div>
        {/* <a href="https://www.instagram.com/botsartifact">instagram</a> */}
      </motion.div>
    </>
  );
}
