// import React from 'react'
// import { Canvas } from '@react-three/fiber'
// import { ACESFilmicToneMapping } from 'three'
// import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'

// import Spheres from './Spheres'

// const Background = () => {
//   return (
//     <Canvas
//       shadows
//       camera={{
//         position: [10, -60, 30],
//         fov: 70,
//       }}
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100vh',
//         opacity: 0.35,
//       }}
//       gl={{
//         alpha: true,
//         antialias: true,
//         stencil: false,
//       }}
//       onCreated={({ gl }) => {
//         gl.toneMapping = ACESFilmicToneMapping
//       }}
//     >
//       <React.Suspense fallback={null}>
//         <Spheres />
//       </React.Suspense>
//       <EffectComposer>
//         <Bloom luminanceThreshold={21} luminanceSmoothing={0.9} height={300} />
//         <Vignette eskil={true} offset={0.5} darkness={1.1} />
//       </EffectComposer>
//     </Canvas>
//   )
// }

// export default Background
