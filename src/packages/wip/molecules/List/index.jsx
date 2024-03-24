// Heading component which takes in even the heading level as a prop and renders the heading accordingly.

import React from "react";
import PropTypes from "prop-types";
import {
  alignments,
  cases,
  lineHeights,
} from "../../../utils/text";

/**
 * @type LineHeight
 * @description Line height
 * @param {number} 1 - Small line height
 * @param {number} 1.25 - Medium line height
 * @param {number} 1.5 - Base line height
 * @param {number} 2 - Large line height
 */

/**
 * @type TextCase
 * @description Text case
 * @param {string} sentence - Sentence case
 * @param {string} title - Title case
 * @param {string} upper - Uppercase
 * @param {string} lower - Lowercase
 */

/**
 * @type Alignment
 * @description Alignment
 * @param {string} left - Left alignment
 * @param {string} center - Center alignment
 * @param {string} right - Right alignment
 */

/**
 * @type FontWeight
 * @description Font weight
 * @param {string} normal - Normal font weight
 * @param {string} medium - Medium font weight
 * @param {string} bold - Bold font weight
 */

/**
 * @type Variant
 * @description Heading level
 * @param {number} 1 - Heading level 1
 * @param {number} 2 - Heading level 2
 * @param {number} 3 - Heading level 3
 * @param {number} 4 - Heading level 4
 * @param {number} 5 - Heading level 5
 * @param {number} 6 - Heading level 6
 */

/**
 * Heading component
 * @function H
 * @param {object} props - Heading props
 * @param {Variant} variant - Heading level (1-6) default 1
 * @param {string} className - Heading class default empty string
 * @param {node} children - Heading content default empty string
 * @param {boolean} textBreak - Add text-break to the heading default true
 * @param {boolean} truncateText - Truncate text default true
 * @param {Alignment} alignment - Alignment default left
 * @param {TextCase} textCase - Text case default title
 * @param {FontWeight} fontWeight - Font weight default normal
 * @param {LineHeight} lineHeight - Line height 1, 1.25, 1.5, 2 default 1.5 (base)
 * @returns {JSX.Element}
 */
const H = ({ variant = 1, ...props }) => {
  const {
    className = "",
    children = "",
    textBreak = true,
    truncateText = true,
    alignment = "left",
    textCase = "title",
    fontWeight = "normal",
    lineHeight = 1.25,
    ...args
  } = props;

  const Tag = `h${variant}`;

  const textTransform =
    textCase !== "sentence"
      ? `text-${cases[textCase.toLowerCase()]}`
      : "";

  if (
    textCase == "sentence" &&
    typeof children == "string"
  ) {
    children.charAt(0).toUpperCase() + children.slice(1);
  }

  return (
    <Tag
      className={`${className} ${lineHeights[lineHeight]} ${textTransform} ${textBreak ? "text-break" : ""} ${truncateText ? "text-wrap" : "text-nowrap"} text-${alignments[alignment.toLowerCase()]} fw-${fontWeight}`.trim()}
      {...args}
    >
      {children}
    </Tag>
  );
};

H.propsTypes = {
  variant: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  textBreak: PropTypes.bool,
  truncateText: PropTypes.bool,
  alignment: PropTypes.oneOf(["left", "center", "right"]),
  textCase: PropTypes.oneOf(["sentence", "upper", "lower"]),
};

const H1 = ({ ...props }) => <H variant={1} {...props} />;

const H2 = ({ ...props }) => <H variant={2} {...props} />;

const H3 = ({ ...props }) => <H variant={3} {...props} />;

const H4 = ({ ...props }) => <H variant={4} {...props} />;

const H5 = ({ ...props }) => <H variant={5} {...props} />;

const H6 = ({ ...props }) => <H variant={6} {...props} />;

export { H, H1, H2, H3, H4, H5, H6 };
