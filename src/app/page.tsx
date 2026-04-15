import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
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
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.16rem, 3.34vw, 2.16rem)",
            fontWeight: 700,
            color: "#000000",
            lineHeight: 1.2,
            maxWidth: "454px",
            marginBottom: "2rem",
            letterSpacing: "-0.01em",
          }}
        >
          Turning wastewater into the world&apos;s cheapest fuels
        </h1>

        <a
          href="mailto:jaredwest@westernchemicals.com?subject=Inquiry%20—%20Western%20Chemicals"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(0.66rem, 1.66vw, 0.84rem)",
            color: "#000000",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Give us a holler
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
            color: "rgba(0,0,0,0.4)",
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
