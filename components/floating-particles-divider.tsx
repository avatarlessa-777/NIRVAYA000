"use client"

const particles = [
  { top: "20%", left: "15%", duration: "2s", delay: "0s" },
  { top: "60%", left: "25%", duration: "2.5s", delay: "0.5s" },
  { top: "30%", left: "45%", duration: "3s", delay: "1s" },
  { top: "70%", left: "55%", duration: "3.5s", delay: "1.5s" },
  { top: "40%", left: "70%", duration: "2s", delay: "0.3s" },
  { top: "15%", left: "80%", duration: "2.5s", delay: "0.8s" },
  { top: "55%", left: "90%", duration: "3s", delay: "1.2s" },
]

export function FloatingParticlesDivider() {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden" style={{ background: "var(--background)" }}>
      {/* Gradient glow in center */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(200,148,62,0.06) 0%, transparent 70%)"
        }}
      />
      
      {/* Floating particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full animate-float-particle"
          style={{
            top: particle.top,
            left: particle.left,
            background: "rgba(200,148,62,0.4)",
            "--particle-duration": particle.duration,
            "--particle-delay": particle.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
