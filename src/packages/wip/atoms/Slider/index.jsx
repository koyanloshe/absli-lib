import React from "react";

const Slider = ({ value, onChange, ...props }) => {
  return (
    <input
      type="range"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Slider;
