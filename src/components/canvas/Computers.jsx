

// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";
// import DesktopPage from "./DesktopPage";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [showDesktop, setShowDesktop] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);
//     const handleMediaQueryChange = (event) => setIsMobile(event.matches);
//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//     return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
//   }, []);

//   return (
//     <>
//       {showDesktop ? (
//         <DesktopPage onClose={() => setShowDesktop(false)} />
//       ) : (
//         <div className="relative w-full h-screen">
//           <Canvas
//             frameloop="demand"
//             shadows
//             dpr={[1, 2]}
//             camera={{ position: [20, 3, 5], fov: 25 }}
//             gl={{ preserveDrawingBuffer: true }}
//           >
//             <Suspense fallback={<CanvasLoader />}>
//               <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//               <Computers isMobile={isMobile} />
//             </Suspense>
//             <Preload all />
//           </Canvas>

// {/* <button
//   className="
//     absolute 
//     bottom-10 
//     left-1/2 
//     transform 
//     -translate-x-1/2 
//     px-6 
//     py-3 
//     text-white 
//     text-lg 
//     font-bold 
//     uppercase 
//     rounded-full 
//     cursor-pointer 
//     transition 
//     bg-black 
//     border-2 
//     border-[#7f00ff]
//     shadow-[0_0_8px_#7f00ff] 
//     hover:shadow-[0_0_16px_#e100ff]
//     hover:bg-gradient-to-r 
//     hover:from-[#7f00ff] 
//     hover:to-[#e100ff]
//   "
//   onClick={() => setShowDesktop(true)}
//   style={{ letterSpacing: '1px' }}
// >
//   Open Desktop
// </button> */}

// <div className="relative group">
//   <button
//     className="
//       absolute 
//       bottom-10 
//       left-1/2 
//       transform 
//       -translate-x-1/2 
//       flex 
//       items-center 
//       justify-center
//       w-16 
//       h-16 
//       bg-black 
//       border-2 
//       border-[#7f00ff]
//       rounded-full 
//       cursor-pointer 
//       transition 
//       shadow-[0_0_8px_#7f00ff]
//       hover:shadow-[0_0_16px_#e100ff]
//       hover:bg-gradient-to-r
//       hover:from-[#7f00ff]
//       hover:to-[#e100ff]
//       group
//     "
//     onClick={() => setShowDesktop(true)}
//   >
//     <GiPowerButton size={28} color="#FFFFFF" />
//   </button>
//   <span
//     className="
//       opacity-0 
//       group-hover:opacity-100 
//       transition-opacity 
//       bg-black 
//       text-white 
//       text-sm 
//       px-2 
//       py-1 
//       rounded 
//       absolute 
//       bottom-[4.5rem] 
//       left-1/2 
//       transform 
//       -translate-x-1/2
//       whitespace-nowrap
//     "
//   >
//     Power On
//   </span>
// </div>


//         </div>
//       )}
//     </>
//   );
// };

// export default ComputersCanvas;













import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { GiPowerButton } from "react-icons/gi"; // <-- Added this line
import CanvasLoader from "../Loader";
import DesktopPage from "./DesktopPage";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDesktop, setShowDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <>
      {showDesktop ? (
        <DesktopPage onClose={() => setShowDesktop(false)} />
      ) : (
        <div className="relative w-full h-screen">
          <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
              <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
          </Canvas>

          <div className="relative group">
            <button
              className="
                absolute 
                bottom-10 
                left-1/2 
                transform 
                -translate-x-1/2 
                flex 
                items-center 
                justify-center
                w-16 
                h-16 
                bg-black 
                border-2 
                border-[#7f00ff]
                rounded-full 
                cursor-pointer 
                transition 
                shadow-[0_0_8px_#7f00ff]
                hover:shadow-[0_0_16px_#e100ff]
                hover:bg-gradient-to-r
                hover:from-[#7f00ff]
                hover:to-[#e100ff]
                group
              "
              onClick={() => setShowDesktop(true)}
            >
              <GiPowerButton size={28} color="#FFFFFF" />
            </button>
            <span
              className="
                opacity-0 
                group-hover:opacity-100 
                transition-opacity 
                bg-black 
                text-white 
                text-sm 
                px-2 
                py-1 
                rounded 
                absolute 
                bottom-[4.5rem] 
                left-1/2 
                transform 
                -translate-x-1/2
                whitespace-nowrap
              "
            >
              Power On
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ComputersCanvas;
