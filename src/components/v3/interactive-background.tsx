"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import { Vector2, Color, ShaderMaterial } from "three"
import { Environment } from "@react-three/drei"

const FluidShader = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new Vector2(0, 0) },
    uResolution: { value: new Vector2(1, 1) },
    uColor1: { value: new Color("#4f46e5") }, // Indigo
    uColor2: { value: new Color("#ec4899") }, // Pink
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 st = vUv;
      
      // Mouse interaction - stronger distortion
      float dist = distance(st, uMouse);
      float mouseEffect = smoothstep(0.5, 0.0, dist) * 0.2; // Increased radius and strength
      
      // Fluid distortion
      float noise = snoise(st * 2.5 + uTime * 0.15 + mouseEffect);
      
      // Color mixing with more complexity
      vec3 color = mix(uColor1, uColor2, noise * 0.5 + 0.5);
      
      // Add subtle grain/noise
      float grain = fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453);
      color += grain * 0.03;

      // Add darkness/vignette
      float vignette = distance(st, vec2(0.5));
      color *= 1.0 - vignette * 0.7;

      gl_FragColor = vec4(color, 1.0);
    }
  `
}

function BackgroundPlane() {
  const materialRef = useRef<ShaderMaterial>(null)
  const { viewport, mouse } = useThree()

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
      // Map mouse from [-1, 1] to [0, 1]
      materialRef.current.uniforms.uMouse.value.set(
        (mouse.x + 1) / 2,
        (mouse.y + 1) / 2
      )
    }
  })

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        args={[FluidShader]}
        uniforms-uResolution-value={[viewport.width, viewport.height]}
      />
    </mesh>
  )
}

export function InteractiveBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <BackgroundPlane />
      </Canvas>
    </div>
  )
}
