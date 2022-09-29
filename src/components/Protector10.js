/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
//  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>;


import React, { useState, useRef, createContext } from "react";
import { useGLTF } from "@react-three/drei";
import { useDrag } from "@use-gesture/react";
import { 
  useThree, 
  useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/web";

import {gsap} from "gsap"
//import { mineStart, setMineStart } from './MineRotator';

const Name = createContext();

export function Protector10(props) {
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + "/Protector10.gltf"
  );

  const P10ProtectorRef = React.createRef()

  const { viewport } = useThree();

  

 

  useFrame(({ pointer }) => {
    const x = (pointer.x * viewport.width) / 2;
    const y = (pointer.y * viewport.height) / 2;
    let noseRock = 0.5
   
    if (props.state 
     
      ) {
      P10ProtectorRef.current.position.set(x, y, 0);
      

      props.setstateProtectorPosition({
        PPosX: P10ProtectorRef.current.position.x,
        PPosY: P10ProtectorRef.current.position.y,
        PPosZ: P10ProtectorRef.current.position.z,
        PRotX: P10ProtectorRef.current.rotation.x,
      });
    } 
    
    
  });

  return (
    
      <group {...props} dispose={null} ref={P10ProtectorRef}>
        <group
          position={[0.13, 0, 0.05]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[0.27, 2.42, 0.27]}
        >
          <mesh
            geometry={nodes.Cylinder.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.Cylinder_1.geometry}
            material={materials.blue}
          />
          <mesh
            geometry={nodes.Cylinder_2.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          geometry={nodes.left_engine_cube.geometry}
          material={materials["Material.001"]}
          position={[-0.71, -0.4, 1.81]}
          rotation={[0.94, -Math.PI / 2, 0]}
          scale={[0.32, 0.32, 0.27]}
        />
        <mesh
          geometry={nodes.right_engine_cube.geometry}
          material={materials["Material.001"]}
          position={[0.99, -0.38, 1.81]}
          rotation={[0.94, -Math.PI / 2, 0]}
          scale={[0.32, 0.32, 0.27]}
        />
        <mesh
          geometry={nodes.left_rear_engine_light_two.geometry}
          material={nodes.left_rear_engine_light_two.material}
          position={[-0.85, -0.38, 1.82]}
          rotation={[0.94, -Math.PI / 2, 0]}
          scale={[0.26, 0.24, 0.04]}
        />
        <mesh
          geometry={nodes.left_rear_engine_light_one.geometry}
          material={nodes.left_rear_engine_light_one.material}
          position={[-0.76, -0.38, 1.82]}
          rotation={[0.94, -Math.PI / 2, 0]}
          scale={[0.26, 0.24, 0.04]}
        />
        <mesh
          geometry={nodes.left_rear_engine_light_three.geometry}
          material={nodes.left_rear_engine_light_three.material}
          position={[-0.67, -0.38, 1.83]}
          rotation={[0.94, -Math.PI / 2, 0]}
          scale={[0.26, 0.24, 0.04]}
        />
        <mesh
          geometry={nodes.left_rear_engine_light_four.geometry}
          material={nodes.left_rear_engine_light_four.material}
          position={[-0.58, -0.38, 1.81]}
          rotation={[0.94, -Math.PI / 2, 0]}
          scale={[0.26, 0.24, 0.04]}
        />
        <mesh
          geometry={nodes.left_front_engine.geometry}
          material={materials["Material.001"]}
          position={[-0.57, 0.05, 0.24]}
          rotation={[0.09, -Math.PI / 2, 0]}
          scale={[1.21, 0.36, 0.73]}
        />
        <mesh
          geometry={nodes.right_front_engine.geometry}
          material={materials["Material.001"]}
          position={[0.83, 0.05, -0.06]}
          rotation={[-0.09, Math.PI / 2, 0]}
          scale={[1.21, 0.36, 0.73]}
        />
        <mesh
          geometry={nodes.left_wing.geometry}
          material={materials["Material.001"]}
          position={[-0.84, -0.11, 0.1]}
          rotation={[0.18, Math.PI / 2, 0]}
          scale={[-0.5, -0.11, -0.33]}
        />
        <mesh
          geometry={nodes.right_wing.geometry}
          material={materials["Material.001"]}
          position={[1.11, -0.01, 0.1]}
          rotation={[-2.96, -Math.PI / 2, 0]}
          scale={[-0.5, -0.11, -0.33]}
        />
        <mesh
          geometry={nodes.left_front_engine_light_1.geometry}
          material={materials["Material.003"]}
          position={[-0.74, -0.08, 0.09]}
          rotation={[Math.PI / 2, -1.37, Math.PI / 2]}
          scale={[0.36, 0.09, 0.25]}
        />
        <mesh
          geometry={nodes.left_front_engine_light_2.geometry}
          material={materials["Material.003"]}
          position={[-0.87, -0.04, 0.09]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.33, 0.08, 0.32]}
        />
        <mesh
          geometry={nodes.left_front_engine_light_3.geometry}
          material={materials["Material.003"]}
          position={[-0.95, -0.04, 0.09]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.35, 0.08, 0.34]}
        />
        <mesh
          geometry={nodes.left_front_engine_light_4.geometry}
          material={materials["Material.003"]}
          position={[-1.01, -0.05, 0.09]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.33, 0.09, 0.32]}
        />
        <mesh
          geometry={nodes.left_front_engine_light_5.geometry}
          material={materials["Material.003"]}
          position={[-1.1, -0.06, 0.09]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.33, 0.1, 0.34]}
        />
        <mesh
          geometry={nodes.left_front_engine_light_6.geometry}
          material={materials["Material.003"]}
          position={[-1.17, -0.06, 0.09]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.33, 0.09, 0.34]}
        />
        <mesh
          geometry={nodes.left_front_engine_light_7.geometry}
          material={materials["Material.003"]}
          position={[-1.24, -0.06, 0.09]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.33, 0.09, 0.34]}
        />
        <mesh
          geometry={nodes.nose_cone.geometry}
          material={nodes.nose_cone.material}
          position={[0.13, 0.02, -1.65]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={[0.37, 0.7, 0.21]}
        />
        <mesh
          geometry={nodes.left_front_engine_light_8.geometry}
          material={materials["Material.003"]}
          position={[-1.03, -0.07, 0.1]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.3, 0.1, 0.04]}
        />
        <mesh
          geometry={nodes.right_front_engine_light_8.geometry}
          material={materials["Material.003"]}
          position={[1.32, -0.06, 0.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[-0.36, -0.09, -0.02]}
        />
        <mesh
          geometry={nodes.right_front_engine_light_7.geometry}
          material={materials["Material.003"]}
          position={[1.25, -0.05, 0.07]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[-0.36, -0.09, -0.02]}
        />
        <mesh
          geometry={nodes.right_front_engine_light_6.geometry}
          material={materials["Material.003"]}
          position={[1.17, -0.04, 0.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[-0.36, -0.09, -0.02]}
        />
        <mesh
          geometry={nodes.right_front_engine_light_5.geometry}
          material={materials["Material.003"]}
          position={[1.1, -0.05, 0.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[-0.36, -0.08, -0.02]}
        />
        <mesh
          geometry={nodes.right_front_engine_light_4.geometry}
          material={materials["Material.003"]}
          position={[1.03, -0.04, 0.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[-0.36, -0.08, -0.02]}
        />
        <mesh
          geometry={nodes.right_front_engine_light_3.geometry}
          material={materials["Material.003"]}
          position={[0.96, -0.03, 0.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[-0.32, -0.07, -0.02]}
        />
        <mesh
          geometry={nodes.right_front_engine_light_2.geometry}
          material={materials["Material.003"]}
          position={[0.89, -0.03, 0.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[-0.32, -0.07, -0.02]}
        />
        <mesh
          geometry={nodes.right_front_engine_light_1.geometry}
          material={materials["Material.003"]}
          position={[0.83, -0.02, 0.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[-0.32, -0.07, -0.02]}
        />
        <mesh
          geometry={nodes.right_rear_engine_light_two.geometry}
          material={nodes.right_rear_engine_light_two.material}
          position={[0.85, -0.39, 1.8]}
          rotation={[-0.18, -1.56, -0.89]}
          scale={[0.29, 0.19, 0.05]}
        />
        <mesh
          geometry={nodes.right_rear_engine_light_one.geometry}
          material={nodes.right_rear_engine_light_one.material}
          position={[0.95, -0.39, 1.77]}
          rotation={[-0.18, -1.56, -0.89]}
          scale={[0.29, 0.19, 0.05]}
        />
        <mesh
          geometry={nodes.right_rear_engine_light_four.geometry}
          material={nodes.right_rear_engine_light_four.material}
          position={[1.04, -0.39, 1.76]}
          rotation={[-0.18, -1.56, -0.89]}
          scale={[0.29, 0.19, 0.05]}
        />
        <mesh
          geometry={nodes.right_rear_engine_light_three.geometry}
          material={nodes.right_rear_engine_light_three.material}
          position={[1.14, -0.39, 1.76]}
          rotation={[-0.18, -1.56, -0.89]}
          scale={[0.29, 0.19, 0.05]}
        />
      </group>
   
  );
}

useGLTF.preload(process.env.PUBLIC_URL + "/Protector10.gltf");
