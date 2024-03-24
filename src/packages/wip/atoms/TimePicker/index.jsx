import React from "react";

const TimePicker = ({ value, onChange, ...props }) => {
  return (
    <input
      type="time"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default TimePicker;
