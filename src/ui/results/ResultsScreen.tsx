import { World } from "../../engine/core/World";

interface Props {
  world: World;
}

export function ResultsScreen({ world }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.92)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: 700,
          background: "#111",
          borderRadius: 12,
          padding: 30,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          🏁 GRAND PRIX FINISHED
        </h1>

        {world.leaderboard.map((car, index) => (
          <div
            key={car.driver.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 12px",
              marginBottom: 4,
              borderRadius: 6,
              background: car.isPlayer
                ? "#C8102E"
                : "#222",
            }}
          >
            <span>P{index + 1}</span>

            <span>{car.driver.name}</span>

            <span>{car.driver.team}</span>
          </div>
        ))}

        <button
          style={{
            marginTop: 25,
            width: "100%",
            padding: 12,
            cursor: "pointer",
          }}
          onClick={() => window.location.reload()}
        >
          Return to Main Menu
        </button>
      </div>
    </div>
  );
}