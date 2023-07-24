import { useEffect, useState } from "react";
import { GameTimerContainer } from "./styles";

export interface TimePartsType {
  milliseconds: number;
  seconds: number;
  minutes: number;
}

const GameTimer = ({
  status,
}: {
  status: "start" | "stop" | "reset" | "stop-reset";
}) => {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    switch (status) {
      case "start":
        startAndStop();
        break;
      case "stop":
        startAndStop();
        break;
      case "reset":
        reset();
        break;
      case "stop-reset":
        reset();
        startAndStop();
        break;
    }
  }, [status]);

  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <GameTimerContainer>
      {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </GameTimerContainer>
  );
};

export default GameTimer;
