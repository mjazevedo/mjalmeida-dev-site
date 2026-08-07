/**
 * Static fallback rendered when WebGL is unavailable, the user prefers
 * reduced motion, the device is low-end, or the scene fails to load.
 * Pure SVG + CSS: no JavaScript required beyond React rendering.
 */
export function SceneFallback() {
  const nodes: ReadonlyArray<{ x: number; y: number; r: number; core?: boolean }> = [
    { x: 50, y: 50, r: 10, core: true },
    { x: 18, y: 26, r: 4.5 },
    { x: 82, y: 22, r: 4 },
    { x: 14, y: 70, r: 4 },
    { x: 86, y: 66, r: 4.5 },
    { x: 36, y: 86, r: 3.5 },
    { x: 68, y: 84, r: 3.5 },
  ];

  return (
    <div
      role="img"
      aria-label="Ilustração de uma arquitetura de software: um núcleo central conectado a módulos de APIs, aplicações web, dados, cloud, segurança e observabilidade."
      className="absolute inset-0 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgb(77 124 254 / 0.14), transparent 70%), radial-gradient(ellipse 40% 35% at 70% 60%, rgb(140 103 255 / 0.1), transparent 70%)",
        }}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
      >
        {nodes.slice(1).map((node) => (
          <line
            key={`edge-${node.x}-${node.y}`}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="#4D7CFE"
            strokeOpacity="0.35"
            strokeWidth="0.25"
          />
        ))}
        {nodes.map((node) => (
          <circle
            key={`node-${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.core ? "#0B1020" : "#11182B"}
            stroke={node.core ? "#35D8FF" : "#4D7CFE"}
            strokeWidth={node.core ? 0.5 : 0.35}
            strokeOpacity={node.core ? 0.9 : 0.6}
          />
        ))}
      </svg>
    </div>
  );
}
