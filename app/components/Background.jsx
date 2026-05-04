'use client'

import Grainient from '../../components/Grainient';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
        <Grainient
            color1="#0b7586"
            color2="#09091a"
            color3="#1c2b3b"
            timeSpeed={0.85}
            colorBalance={0}
            warpStrength={3.2}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={32}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={440}
            noiseScale={2.55}
            grainAmount={0.1}
            grainScale={3.1}
            grainAnimated={false}
            contrast={1.5}
            gamma={1.2}
            saturation={1}
            centerX={0}
            centerY={0.3}
            zoom={0.95}
        />
    </div>
  );
}
