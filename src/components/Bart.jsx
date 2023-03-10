/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 bart.gltf --transform
Author: Melco007 (https://sketchfab.com/David.Cormier)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bart-simpson-790e225c0552409abe76673faa1141f5
Title: Bart Simpson
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

 function Model(props) {
  const { nodes, materials } = useGLTF('/bart-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.24}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.accessoirs} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.accessoirs} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.accessoirs} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.accessoirs} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.soul_pant} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.soul_pant} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.accessoirs} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_18.geometry} material={materials.accessoirs} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.corps} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.corps} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.corps} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_26.geometry} material={materials.corps} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_28.geometry} material={materials.corps} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_30.geometry} material={materials.pupilles} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_32.geometry} material={materials.yeux} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_34.geometry} material={materials.yeux} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_36.geometry} material={materials.pupilles} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_38.geometry} material={materials.soul_pant} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
          <mesh geometry={nodes.Object_40.geometry} material={materials.chemise} rotation={[Math.PI / 2, 0, Math.PI]} scale={4} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/bart-transformed.glb')

export default Model