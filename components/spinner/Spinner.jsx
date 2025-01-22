"use client";

const { RingLoader } = require("react-spinners");

const Spinner = () => {
  return (
    <div className="flex ">
      <RingLoader
        color="#820d80"
        cssOverride={{}}
        size={60}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Spinner;