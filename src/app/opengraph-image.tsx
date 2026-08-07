import { ImageResponse } from "next/og";

export const alt = "Matheus Azevedo — Desenvolvimento e Arquitetura de Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#05070D",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            border: "2px solid #4D7CFE",
            background: "#0B1020",
            color: "#F5F7FF",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          MA
        </div>
        <div style={{ display: "flex", color: "#AAB4CE", fontSize: 28 }}>
          Matheus Azevedo
        </div>
      </div>
      <div
        style={{
          display: "flex",
          color: "#F5F7FF",
          fontSize: 56,
          fontWeight: 700,
          lineHeight: 1.15,
          maxWidth: 900,
        }}
      >
        Sistemas que transformam complexidade em soluções claras.
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 36,
          color: "#35D8FF",
          fontSize: 26,
        }}
      >
        APIs · .NET · Arquitetura · Integrações · Segurança
      </div>
    </div>,
    size,
  );
}
