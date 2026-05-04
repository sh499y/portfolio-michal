'use client'

import Grainient from '../../components/Grainient';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
        <Grainient
            color1="#090c0b"
            color2="#045066"
            color3="#060a4a"
            timeSpeed={0.4}
            colorBalance={0}
            warpStrength={0.55}
            warpFrequency={5.5}
            warpSpeed={2}
            warpAmplitude={33}
            blendAngle={-10}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={1.35}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.2}
            gamma={0.8}
            saturation={1.4}
            centerX={0}
            centerY={0}
            zoom={1.15}
        />
    </div>
  );
}
