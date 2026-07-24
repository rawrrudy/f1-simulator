import { useEffect, useRef } from "react";
import { Car } from "../../../engine/entities/Car";
import { TeamColors } from "../TeamColors";
import "../styles/timing.css";

type Props = {
  car: Car;
  position: number;
  gap: string;
};

export function TimingRow({
  car,
  position,
  gap,
}: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const previousPosition = useRef(position);

  useEffect(() => {
    if (!rowRef.current) return;

    if (previousPosition.current !== position) {
      rowRef.current.classList.remove("position-up");
      rowRef.current.classList.remove("position-down");

      void rowRef.current.offsetWidth;

      if (position < previousPosition.current) {
        rowRef.current.classList.add("position-up");
      } else {
        rowRef.current.classList.add("position-down");
      }

      previousPosition.current = position;
    }
  }, [position]);

  return (
    <div
      ref={rowRef}
      className="timing-row"
    >
      <div className="position">
        {position}
      </div>

      <div
        className="team-strip"
        style={{
          background: TeamColors[car.driver.shortName],
        }}
      />

      <div className="driver">
        {car.driver.shortName}
      </div>

      <div className="gap">
        {gap}
      </div>
    </div>
  );
}