import React, { useEffect, useState } from "react";

const deadline = "16 march 2023 15:00:00";

const App = ({ setWhitelistStarted }) => {
  const [remaining, setRemaining] = useState(getTimeRemaining(deadline));

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const ended = total <= 0 ? true : false;

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
      ended,
    };
  }

  useEffect(() => {
    if (remaining.ended) {
      clearInterval(timeInterval);
      setWhitelistStarted(true);
    }
  }, [remaining.ended]);

  const timeInterval = setInterval(() => {
    setRemaining(getTimeRemaining(deadline));
  }, 1000);

  return (

    <div className='main-container flex md:gap-24 sm:gap-16 gap-14'>

      <div>
        <div id='number'>{remaining.days}</div>
        <div id='tag' style={{ color: "#B1CDEC" }}>
          Days
        </div>
      </div>
      <div>
        <div id='number'>{remaining.hours}</div>
        <div id='tag' style={{ color: "#B1CDEC" }}>
          Hours
        </div>
      </div>
      <div>
        <div id='number'>{remaining.minutes}</div>
        <div id='tag' style={{ color: "#B1CDEC" }}>
          Minutes
        </div>
      </div>
      <div>
        <div id='number'>{remaining.seconds}</div>
        <div id='tag' style={{ color: "#B1CDEC" }}>
          Seconds
        </div>
      </div>
    </div>
  );
};

export default App;
