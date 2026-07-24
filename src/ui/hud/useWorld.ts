import { useEffect, useState } from "react";
import { engineStore } from "../../engine/core/EngineStore";
import { World } from "../../engine/core/World";

export function useWorld(): World | null {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate(value => value + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return engineStore.engine?.world ?? null;
}