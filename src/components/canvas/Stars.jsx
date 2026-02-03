import React, { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

const Stars = React.memo((props) => {
  const ref = useRef();
  const sphere = useMemo(() =>
    random.inSphere(new Float32Array(2000), { radius: 1.2 }),
    []
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={["#f272c8", "#00ffff", "#ffffff"][Math.floor(Math.random() * 3)]}
          size={0.80}
          sizeAttenuation={false}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

const StyledStarsCanvas = React.memo(() => {
  return (
    <StyledCanvasWrapper>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
});

export default StyledStarsCanvas;
