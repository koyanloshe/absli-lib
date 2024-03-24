import { useState, useRef } from "react";

/**
 * @typedef {import("./index.types.js").Props} Props
 */

/**
 * @name Input
 * @description The Input component is a wrapper around the HTML input element.
 * @params {Props} props - The component props
 * @returns {React.Component} The Input component
 */
const Input = ({
  type = "text",
  name = "",
  value,
  prefix = "+91",
  suffix = ".00",
  maskedValue = "",
  placeholder = "",
  prefixClassName = "",
  suffixClassName = "",
  inputClassName = "",
  onChange,
  helpText = "Help text",
  ...props
}) => {
  const [val, setVal] = useState(value);
  const [mask, setMasked] = useState(maskedValue);
  const inputRef = useRef(null);

  const types = {
    text: {
      type: "text",
      name: "text",
      value: "",
      placeholder: "Text",
      autocomplete: [
        "name",
        "honorific-prefix",
        "given-name",
        "additional-name",
        "family-name",
        "honorific-suffix",
        "nickname",
        "username",
        "organization",
        "organization-title",
        "street-address",
        "shipping",
        "billing",
        "address-line1",
        "address-line2",
        "address-line3",
        "country",
        "country-name",
        "postal-code",
        "cc-name",
        "cc-given-name",
        "cc-additional-name",
        "cc-family-name",
        "sex",
      ],
    },
    password: {
      type: "password",
      name: "password",
      value: "",
      placeholder: "Password",
      autocomplete: [
        "new-password",
        "current-password",
        "one-time-code",
      ],
    },
    email: {
      type: "email",
      name: "email",
      value: "",
      placeholder: "Email",
      autocomplete: ["email"],
    },
    tel: {
      type: "tel",
      name: "tel",
      value: "",
      placeholder: "Phone",
      autocomplete: [
        "tel",
        "tel-country-code",
        "tel-national",
        "tel-area-code",
        "tel-local",
        "tel-local-prefix",
        "tel-local-suffix",
        "tel-extension",
      ],
    },
    url: {
      type: "url",
      name: "url",
      value: "",
      placeholder: "URL",
      autocomplete: ["url"],
    },
    number: {
      type: "number",
      name: "number",
      value: "",
      placeholder: "Number",
      autocomplete: ["cc-number"],
    },
    date: {
      type: "date",
      name: "date",
      value: "",
      placeholder: "Date",
      autocomplete: [
        "bday",
        "bday-day",
        "bday-month",
        "bday-year",
        "birthdate",
        "birth-date",
        "anniversary",
        "cc-exp",
        "cc-exp-month",
        "cc-exp-year",
      ],
    },
    time: "time",
    week: {
      type: "week",
      name: "week",
      value: "",
      placeholder: "Week",
      autocomplete: ["off"],
    },
    month: {
      type: "month",
      name: "month",
      value: "",
      placeholder: "Month",
      autocomplete: ["bday-month"],
    },
  };

  return (
    <div className="mb-3">
      <label
        className="form-label"
        htmlFor={inputRef.current}
      >
        Name
      </label>
      <div className="input-group">
        <span
          className={`input-group-text ${prefixClassName}`}
          id="basic-addon1"
        >
          {prefix}
        </span>

        <input
          ref={inputRef}
          aria-describedby="helpId"
          className={`form-control ${inputClassName}`}
          name=""
          placeholder=""
          type={type}
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
            setMasked(e.target.value);
            onChange && onChange(e);
          }}
        />
        <span
          className={`input-group-text ${suffixClassName}`}
        >
          {suffix}
        </span>
      </div>
      <div className="valid-feedback">Looks good!</div>
      <div className="mt-1">
        <small className="form-text text-muted" id="helpId">
          {helpText}
        </small>
      </div>
    </div>
  );
};

export default Input;
