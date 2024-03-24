import React, { useRef, useState } from "react";

/**
 * @typedef {import("./index.type").Props} Props
 */

/**
 * @name Checkbox component
 * @description Checkbox component is used to render the checkbox input.
 * @param {Object} props - The props passed to the component.
 * @returns {React.Component} A React component that displays the checkbox input.
 */

const Checkbox = ({
  checked = false,
  structureClassName = "",
  labelClassName = "",
  checkBoxClassName = "",
  label = "Checkbox",
  ...props
}) => {
  const checkboxRef = useRef(null);
  const [check, setChecked] = useState(checked);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className={`form-check ${structureClassName}`}>
      <label
        className={`form-check-label ${labelClassName}`}
      >
        <input
          aria-checked={check}
          aria-labelledby={label}
          {...props}
          ref={checkboxRef}
          checked={check}
          className={`form-check-input ${checkBoxClassName}`}
          type="checkbox"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkboxRef.current.click();
            }
          }}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
