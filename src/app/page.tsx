import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <Image
        src="/hero.jpg"
        alt="Western Chemicals facility in the American desert"
        fill
        priority
        quality={90}
        style={{ objectFit: "cover", objectPosition: "left top" }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "100%",
          padding: "1.5rem",
          paddingBottom: "calc(100dvh / 6)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.16rem, 3.34vw, 2.16rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            maxWidth: "min(454px, 90vw)",
            marginBottom: "1.5rem",
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            letterSpacing: "-0.01em",
          }}
        >
          Turning wastewater into the world&apos;s cheapest fuels
        </h1>

        <a
          href="mailto:jared@westernchemicals.com?subject=Inquiry%20—%20Western%20Chemicals"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(0.75rem, 1.66vw, 0.84rem)",
            color: "#ffffff",
            textDecoration: "none",
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            cursor: "pointer",
            minHeight: "44px",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Give us a holler!
        </a>
        <a
          href="mailto:jared@westernchemicals.com?subject=Inquiry%20—%20Western%20Chemicals"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: "clamp(0.6rem, 1.33vw, 0.7rem)",
            color: "#ffffff",
            textDecoration: "none",
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            cursor: "pointer",
            marginTop: "0.5rem",
          }}
        >
          jared@westernchemicals.com
        </a>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "1.25rem",
          width: "100%",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.45)",
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "0.05em",
          }}
        >
          &copy; {new Date().getFullYear()} Western Chemicals
        </span>
      </div>
    </main>
  );
}
