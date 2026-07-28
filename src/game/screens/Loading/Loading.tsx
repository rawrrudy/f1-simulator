import "./Loading.css";
import { useEffect } from "react";
import { tracks } from "../../data/tracks";
import { Screen, useGame } from "../../state/GameContext";

export function Loading() {

  const { state, setState } = useGame();

  const track = tracks.find(
      t => t.id === state.selectedTrack
  );

  useEffect(() => {

    const timeout = setTimeout(() => {

      setState(previous => ({

        ...previous,

        currentScreen: Screen.Race,

      }));

    }, 2200);

    return () => clearTimeout(timeout);

  }, [setState]);

  return (

    <div className="loading-screen">

      <div className="loading-content">

        <span>

          PREPARING RACE WEEKEND

        </span>

        

        <h1>{track?.grandPrix} GRAND PRIX</h1>
        <p>{track?.country}</p>

        

        <div className="loading-summary">

          <div>

            <strong>Weather</strong>

            <span>{state.weather}</span>

          </div>

          <div>

            <strong>Laps</strong>

            <span>{state.raceLaps}</span>

          </div>

        </div>

        <div className="loading-bar">

          <div className="loading-progress"/>

        </div>

      </div>

    </div>

  );

}