/**
 * @name commons
 * @type {object}
 * @description This is the common argTypes for the text atoms components
 * @property {object} className - Provide a list of classes as text
 * @property {object} textBreak - Add text-break to the heading
 * @property {object} truncateText - Truncate text
 * @property {object} alignment - Alignment
 * @property {object} textCase - Text case
 * @property {object} fontWeight - Available font weights
 * @property {object} children - Content
 */
const commons = {
  className: {
    control: "text",
    description: "Provide a list of classes as text",
    table: {
      type: { summary: "text" },
      defaultValue: { summary: "" },
    },
  },
  textBreak: {
    control: "boolean",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: true },
    },
    description: "Add text-break to the heading",
  },
  truncateText: {
    control: "boolean",
    description: "Truncate text",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: true },
    },
  },
  alignment: {
    control: {
      type: "inline-radio",
      defaultValue: "left",
    },
    description: "Alignment",
    table: {
      type: { summary: "inline-radio" },
      defaultValue: { summary: "left" },
    },
    options: ["left", "center", "right"],
  },
  textCase: {
    control: {
      type: "inline-radio",
    },
    description: "Text case",
    table: {
      type: { summary: "inline-radio" },
      defaultValue: { summary: "sentence" },
    },
    options: ["sentence", "title", "upper", "lower"],
  },
  fontWeight: {
    control: {
      type: "inline-radio",
    },
    description: "Available font weights",
    table: {
      type: { summary: "inline-radio" },
      defaultValue: { summary: "normal" },
    },
    options: ["normal", "medium", "bold"],
  },
  children: {
    control: {
      type: "text",
    },
    description: "Content",
    table: {
      type: { summary: "text" },
      defaultValue: { summary: "" },
    },
  },
};

export default commons;
