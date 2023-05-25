import { useEffect, useRef, useState } from "react";

export const useFormattedDateTime = () => {
  const [currentTimeInfo, setCurrentTimeInfo] = useState(
    new Date().toISOString()
  );
  const currentUTCOffset = useRef(new Date().getTimezoneOffset() / 60);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCurrentTimeInfo(new Date().toISOString());
    }, 1_000);

    return () => clearInterval(timeout);
  }, []);
  // это 100% можно как нибудь изящно сделать через Intl, но
  const currentDateStr = `${currentTimeInfo.slice(
    8,
    10
  )}.${currentTimeInfo.slice(5, 7)}.${currentTimeInfo.slice(0, 4)}`;

  const currentTimeStr = `${
    (+currentTimeInfo.slice(11, 13) - currentUTCOffset.current) % 24
  }:${currentTimeInfo.slice(14, 16)}`;

  return {
    formattedDate: currentDateStr,
    formattedTime: currentTimeStr,
  };
};
