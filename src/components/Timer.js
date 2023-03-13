import React from "react";
import Countdown from "react-countdown";

const Timer = () => {
  return (
    <div>
      <div className="text-center">
        <Countdown date={Date.now() + 100000} className='text-2xl bg-white text-black p-4 rounded-lg'/>
      </div>
    </div>
  );
};

export default Timer;
