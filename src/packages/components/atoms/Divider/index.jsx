import React from "react";

/**
 * @typedef {import("./index.type").Props} Props
 */

const Divider = ({ type = "radial" }) => {
  return <hr className={type} />;
};

export default Divider;
