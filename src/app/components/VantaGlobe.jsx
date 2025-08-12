"use client";

import { useEffect, useRef, useState } from "react";

export default function VantaGlobe() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let effect;

    if (typeof window !== "undefined" && !vantaEffect) {
      const loadVanta = async () => {
        // Load THREE.js first
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
          script.onload = resolve;
          document.body.appendChild(script);
        });

        // Then load Vanta
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js";
        script.onload = () => {
          if (window.VANTA && vantaRef.current) {
            effect = window.VANTA.GLOBE({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0xff0000,           // Red globe
              backgroundColor: 0x10101   // Dark background
            });
            setVantaEffect(effect);
          }
        };
        document.body.appendChild(script);
      };

      loadVanta();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ width: "100%", height: "100vh" }} />;
}
