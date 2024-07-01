import { useEffect, useState } from "react";

type TimerArgs = {
  milisegundos: number;
};

export const Timer = ({ milisegundos }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((prevSegundos) => prevSegundos + 1);
    }, milisegundos);

    return () => clearInterval(interval);
  }, [milisegundos]);

  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </>
  );
};
