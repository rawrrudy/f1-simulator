import "./WeekendSetup.css";
import { WeatherCard } from "./WeatherCard";
import { useState } from "react";
import { tracks } from "../../data/tracks";
import { TrackCard } from "./TrackCard";
import { useGame, Screen } from "../../state/GameContext";

export function WeekendSetup() {

  const { setState } = useGame();

  const [selectedTrack, setSelectedTrack] = useState(
    tracks[0]
  );
  const [selectedWeather, setSelectedWeather] = useState(
    "Sunny"
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

              <WeatherCard
                  
                  icon="☀"

                  title="SUNNY"

                  subtitle="Dry Conditions"

                  selected={selectedWeather === "Sunny"}

                  onClick={() => {

                      setSelectedWeather("Sunny");

                      setState(previous => ({
                        ...previous,
                        weather: "Sunny",
                      }));

                  }}
              />

              <WeatherCard
                  
                  icon="☁"

                  title="CLOUDY"

                  subtitle="Cooler Track"

                  selected={selectedWeather === "Cloudy"}

                  onClick={() => {

                      setSelectedWeather("Cloudy");

                      setState(previous => ({
                        ...previous,
                        weather: "Cloudy",
                      }));

                  }}
              />

              <WeatherCard
                  
                  icon="🌧"

                  title="RAINY"

                  subtitle="Wet Conditions"

                  selected={selectedWeather === "Rainy"}

                  onClick={() => {

                      setSelectedWeather("Rainy");

                      setState(previous => ({
                        ...previous,
                        weather: "Rainy",
                      }));

                  }}
              />

          </div>

        </section>

        <div className="weekend-footer">

          <button
            className="start-race-button"
            onClick={() =>
              setState(previous => ({
                ...previous,
                currentScreen: Screen.Loading,
              }))
            }
          >

            START RACE →

          </button>

        </div>

      </div>

    </div>
  );
}