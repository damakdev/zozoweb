import { useEffect, useState } from "react";

const useCountdown = (startDate, endDate) => {
  // get start date in milliseconds
  const startTimeMs = new Date(startDate).getTime() - 3600000;
  const endTimeMs = new Date(endDate).getTime() - 3600000;
  // console.log(new Date(startTimeMs));
  // console.log(new Date(startDate), new Date());

  // target date - present date
  // const [countDown, setCountDown] = useState(
  //     startTimeMs - new Date().getTime()
  // );
  const [countDown, setCountDown] = useState(0);
  // console.log(countDown);

  useEffect(() => {
    // if (
    //     // the now is greater than the start time
    //     new Date().getTime() >= startTimeMs &&
    //     // today is still before the end date
    //     new Date().getTime() <= endTimeMs
    // ) {
    //     console.log('started');

    //     setCountDown(endTimeMs - new Date().getTime());
    // }

    if (
      // the now is greater than the start time
      new Date().getTime() >= startTimeMs &&
      // today is still before the end date
      new Date().getTime() <= endTimeMs
    ) {
    //   console.log("started");

      const interval = setInterval(() => {
        setCountDown(endTimeMs - new Date().getTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [parseInt(new Date().getTime() / 1000)]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
