import React from "react";

const Toggle = ({ value, onChange, ...props }) => {
  return (
    <input
      checked={value}
      type="checkbox"
      onChange={onChange}
      {...props}
    />
  );
};

export default Toggle;
