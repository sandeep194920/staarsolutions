import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Staar Solutions — Software Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0f0c29 0%, #1a1040 50%, #0f0c29 100%)",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: 200,
            width: 800,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: "60px 80px",
            position: "relative",
          }}
        >
          {/* Logo + name */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
                  fill="white"
                  fillOpacity="0.95"
                />
              </svg>
            </div>
            <span
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.5px",
                display: "flex",
              }}
            >
              Staar Solutions
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              marginBottom: 24,
              gap: 16,
            }}
          >
            <span style={{ display: "flex" }}>We build apps</span>
            <span
              style={{
                display: "flex",
                color: "#a78bfa",
              }}
            >
              people actually use
            </span>
          </div>

          {/* Subline */}
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "rgba(148,163,184,1)",
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            Canadian software studio · iOS, Android &amp; Web · Toronto
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { value: "5", label: "In-house apps" },
              { value: "7+", label: "Years building" },
              { value: "2", label: "Client products" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: 16,
                  padding: "16px 40px",
                }}
              >
                <span style={{ display: "flex", fontSize: 36, fontWeight: 800, color: "white" }}>
                  {stat.value}
                </span>
                <span style={{ display: "flex", fontSize: 14, color: "rgba(148,163,184,1)", marginTop: 4 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 32,
            right: 48,
            fontSize: 18,
            color: "rgba(99,102,241,0.8)",
            fontWeight: 600,
          }}
        >
          staarsolutions.ca
        </div>
      </div>
    ),
    { ...size }
  );
}
