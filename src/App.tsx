import "./App.css";
import { useGamingEngine } from "./hooks/useGameEngine";

function App() {
  useGamingEngine();

  return (
    <div className="app">
      <h1>F1 Strategy Simulator</h1>
    </div>
  );
}

export default App;