import React from "react";

/**
 * @name Button
 * @description Button component
 * @type {import('react').FC} ReactNode
 * @param {string} variant - Button variant default fill (fill, outline, text)
 * @param {null | ReactNode} prefixIcon  - Button prefix icon default false
 * @param {null | ReactNode} suffixIcon - Button suffix icon default false
 * @param {boolean} loading - Button loading default false
 * @param {boolean} disabled - Button disabled default false
 * @param {string} size - Button size default medium (small, medium, large)
 * @param {string} label - Button label
 */
export const Button = ({
  variant = "fill",
  size = "medium",
  tagType = "button",
  label = "Button",
  className = "",
  disabled = false,
  fullWidth = false,
  prefixIcon = null
  ...props
}) => {
  const classes = {
    variants: {
      fill: "btn-primary",
      negativeFill: "btn-danger",
      filledTonal: "btn-secondary",
      outline: "btn-outline-primary",
      text: "btn-link",
      blackText: "btn-link text-black",
      icon: "btn-icon",
    },
    sizes: {
      small: "btn-sm",
      medium: "",
      large: "btn-lg",
    },
  };

  const tags = {
    link: "a",
    input: "input",
    button: "button",
  };

  const Tag = tags[tagType];
  // TODO additional attributes per tag type

  return (
    <Tag className="btn btn-primary" type="button">
      {label}
    </Tag>
  );
};
