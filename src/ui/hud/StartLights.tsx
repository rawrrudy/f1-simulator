import "./styles/start-lights.css";
import { useEffect, useState } from "react";

export function StartLights() {
  const [lights, setLights] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current++;

      if (current <= 5) {
        setLights(current);
      } else {
        clearInterval(interval);

        setTimeout(() => {
          setVisible(false);
        }, 700);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="start-lights">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`light ${i < lights ? "on" : ""}`}
        />
      ))}
    </div>
  );
}