import React from "react";
import Countdown from "react-countdown";

const Timer = () => {
  return (
        <div className="text-center cursor-default">
        <Countdown date={Date.now() + 100000} className='text-2xl bg-white text-black p-4 rounded-lg '/>
      </div>
    );
};

export default Timer;
