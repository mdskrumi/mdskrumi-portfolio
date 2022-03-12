import { useState } from "react";
import { useSpring, config } from "react-spring";

const useRaise = (stackedOn: number, isRaised: boolean) => {
  const [raised, setRaised] = useState<boolean>(isRaised);
  const toggle = () => setRaised(!raised);

  const style = useSpring({
    to: {
      y: raised ? -(stackedOn * (window.screen.width <= 600 ? 40 : 60)) : 0,
      config: { ...config.molasses, duration: 1000 },
    },
  });

  return [style, toggle];
};

export default useRaise;
