import React from "react";

const Upload = ({ value, onChange, ...props }) => {
  return (
    <input
      type="file"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Upload;
