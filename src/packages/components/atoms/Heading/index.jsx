// Heading component which takes in even the heading level as a prop and renders the heading accordingly.

import React from "react";

import { textClassList } from "../../../utils/text";

/**
 * @typedef {import("./index.type").Props} Props
 * /

/**
 * Heading component
 * @function H
 * @description Heading component to render the heading
 * @param {Props} props - Component props
 * @returns {JSX.Element}
 */

const H = ({
  variant = 1,
  className = "",
  children = "",
  textBreak = true,
  truncateText = true,
  alignment = "left",
  textCase = "title",
  fontWeight = "normal",
  lineHeight = 1.25,
  ...props
}) => {
  const Tag = `h${variant}`;

  if (
    textCase == "sentence" &&
    typeof children == "string"
  ) {
    children.charAt(0).toUpperCase() + children.slice(1);
  }

  return (
    <Tag
      className={textClassList({
        className,
        truncateText,
        textBreak,
        alignment,
        lineHeight,
        textCase,
        fontWeight,
      })}
      {...props}
    >
      {children}
    </Tag>
  );
};

const H1 = ({ ...props }) => <H variant={1} {...props} />;

const H2 = ({ ...props }) => <H variant={2} {...props} />;

const H3 = ({ ...props }) => <H variant={3} {...props} />;

const H4 = ({ ...props }) => <H variant={4} {...props} />;

const H5 = ({ ...props }) => <H variant={5} {...props} />;

const H6 = ({ ...props }) => <H variant={6} {...props} />;

export { H, H1, H2, H3, H4, H5, H6 };
