import "./WeekendSetup.css";

import { useState } from "react";

import { tracks } from "../../data/tracks";
import { TrackCard } from "./TrackCard";

import { useGame } from "../../state/GameContext";

export function WeekendSetup() {

  const { setState } = useGame();

  const [selectedTrack, setSelectedTrack] = useState(
    tracks[0]
  );

  return (
    <div
      className="weekend-setup"
      style={{
        background: `radial-gradient(
          circle at top,
          ${selectedTrack.theme},
          #0b0d12 70%
        )`,
      }}
    >

      <div className="weekend-overlay"/>

      <div className="weekend-content">

        <div className="weekend-header">

          <span className="weekend-subtitle">
            GRAND PRIX WEEKEND
          </span>

          <h1>
            {selectedTrack.grandPrix}
          </h1>

          <p>
            {selectedTrack.country}
          </p>

        </div>

        <section className="track-section">

          <h2>SELECT CIRCUIT</h2>

          <div className="track-grid">

            {tracks.map(track => (

              <TrackCard

                key={track.id}

                track={track}

                selected={
                  selectedTrack.id === track.id
                }

                onClick={() => {

                  setSelectedTrack(track);

                  setState(previous => ({
                    ...previous,
                    selectedTrack: track.id,
                  }));

                }}

              />

            ))}

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