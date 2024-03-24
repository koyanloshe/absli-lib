import React from "react";

const Search = ({
  value,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <input
      className="form-control"
      placeholder={placeholder}
      type="search"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Search;
