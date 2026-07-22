export function HUD() {
  return (
    <>
      <div
        style={{
            position: "absolute",
            top: 20,
            left: 20,
            color: "white",
            background: "rgba(0,0,0,0.7)",
            padding: 12,
            borderRadius: 8,
            fontFamily: "sans-serif",
        }}
      >
        Timing Tower
      </div>

      <div
        style={{
            position: "absolute",
            top: 20,
            right: 20,
            color: "white",
            background: "rgba(0,0,0,0.7)",
            padding: 12,
            borderRadius: 8,
            fontFamily: "sans-serif",
        }}
      >
        Driver Panel
      </div>
    </>
  );
}