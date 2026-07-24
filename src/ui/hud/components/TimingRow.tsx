import { TeamColors } from "../TeamColors";
import "../styles/timing.css";
import { Car } from "../../../engine/entities/Car";

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
  return (
    <div className="timing-row">
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