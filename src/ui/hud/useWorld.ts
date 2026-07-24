import { useEffect, useState } from "react";
import { engineStore } from "../../engine/core/EngineStore";
import { World } from "../../engine/core/World";

export function useWorld(): World | null {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const update = () => {
      forceUpdate((v) => v + 1);
      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return engineStore.engine?.world ?? null;
}