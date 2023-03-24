/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 officeDrawer.gltf --transform
Author: xbassad (https://sketchfab.com/xbassad)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/file-folder-drawer-91ef22553dc64200862059a588709336
Title: File_Folder_drawer
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function OfficeDrawer(props: any) {
  // @ts-ignore
  const { nodes, materials } = useGLTF("/officeDrawer-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[2.77, 1.07, 0.02]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.86, 0.48, 0.86]}
      >
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        position={[2.62, 1.07, 0.02]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.86, 0.48, 0.86]}
      >
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        position={[2.21, 1.07, 0.02]}
        rotation={[0, 0, -1.33]}
        scale={[0.86, 0.48, 0.86]}
      >
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        position={[0.82, 2.28, 0.02]}
        rotation={[3.13, 0.62, 3.1]}
        scale={[0.86, 0.48, 0.86]}
      >
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        position={[-1.88, 2.07, 1.14]}
        rotation={[Math.PI / 2, -0.29, 0]}
        scale={[0.03, 0, 0.03]}
      >
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group
        position={[-1.88, -2.09, 1.14]}
        rotation={[Math.PI / 2, 0.72, 0]}
        scale={[0.03, 0, 0.03]}
      >
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group
        position={[-1.88, 2.07, -1.14]}
        rotation={[1.57, 0.29, 3.13]}
        scale={[0.03, 0, 0.03]}
      >
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group
        position={[-1.88, -2.09, -1.14]}
        rotation={[1.56, -0.72, 3.13]}
        scale={[0.03, 0, 0.03]}
      >
        <mesh
          geometry={nodes.Object_35.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_36.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Material.001"]}
        scale={[1.96, 2.2, 1.14]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["Material.001"]}
        position={[3.13, 1.06, -0.01]}
        scale={[1.96, 2.2, 1.14]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials["Material.001"]}
        position={[1.98, -1.07, -0.01]}
        scale={[1.96, 2.4, 1.14]}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials["Material.008"]}
        position={[3.05, 1.6, 0]}
        scale={[0.14, 0.14, 0.23]}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials["Material.008"]}
        position={[1.91, -0.33, 0]}
        scale={[0.14, 0.14, 0.23]}
      />
    </group>
  );
}

useGLTF.preload("/officeDrawer-transformed.glb");
