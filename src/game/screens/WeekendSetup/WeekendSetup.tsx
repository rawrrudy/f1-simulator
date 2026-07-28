import "./WeekendSetup.css";

export function WeekendSetup() {
  return (
    <div className="weekend-setup">

      <div className="weekend-overlay"/>

      <div className="weekend-content">

        <div className="weekend-header">

          <span className="weekend-subtitle">
            GRAND PRIX WEEKEND
          </span>

          <h1>Weekend Setup</h1>

          <p>
            Select your circuit and weather before heading
            to the grid.
          </p>

        </div>

        <section className="track-section">

          <h2>SELECT CIRCUIT</h2>

          <div className="track-grid">

          </div>

        </section>

        <section className="weather-section">

          <h2>WEATHER</h2>

          <div className="weather-grid">

          </div>

        </section>

        <div className="weekend-footer">

          <button className="start-race-button">

            START RACE →

          </button>

        </div>

      </div>

    </div>
  );
}