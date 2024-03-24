// Heading component which takes in even the heading level as a prop and renders the heading accordingly.

import React from "react";

const Radio = () => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        id="flexRadioDefault1"
        name="flexRadioDefault"
        type="radio"
      />
      <label
        className="form-check-label"
        htmlFor="flexRadioDefault1"
      >
        Default radio
      </label>
    </div>
  );
};
