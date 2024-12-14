import React from 'react'
import { Float, useGLTF } from '@react-three/drei'

export default function ReactLogo(props) {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={1}>
      <group position={[8,8,0]} scale={0.01} {...props} >
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={20.166}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')