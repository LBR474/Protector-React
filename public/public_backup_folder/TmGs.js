/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/tmGs.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cone" rotation={[0, Math.PI / 4, 0]}>
          <mesh name="Cone_1" geometry={nodes.Cone_1.geometry} material={materials.Material} />
          <mesh name="Cone_2" geometry={nodes.Cone_2.geometry} material={materials['Material.002']} />
          <mesh name="Cone_3" geometry={nodes.Cone_3.geometry} material={materials['Material.004']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tmGs.gltf')
