const cases = {
  sentence: "",
  title: "capitalize",
  upper: "uppercase",
  lower: "lowercase",
};

const alignments = {
  left: "start",
  center: "center",
  right: "end",
};

const lineHeights = {
  1.5: "lh-base",
  1: "lh-1",
  1.25: "lh-sm",
  2: "lh-lg",
};

const sizes = {
  medium: "fs-1",
  small: "fs-2",
  xsmall: "fs-3",
  overline: "fs-1",
  "overline-small": "fs-2",
};

const textClassList = ({
  className,
  size = "",
  truncateText,
  textBreak,
  alignment,
  lineHeight,
  textCase,
  fontWeight,
}) => {
  const classes = {
    size: Object.keys(sizes).includes(size)
      ? sizes[size]
      : "",
    truncate: truncateText ? "text-wrap" : "text-nowrap",
    break: textBreak ? "text-break" : "",
    alignment: `text-${alignments[alignment.toLowerCase()]}`,
    lh: lineHeights[lineHeight],
    weight: `fw-${fontWeight}`,
    transform:
      textCase !== "sentence"
        ? `text-${cases[textCase.toLowerCase()]}`
        : "",
  };

  return `${className} ${Object.values(classes).join(" ")}`.trim();
};

export { cases, alignments, lineHeights, textClassList };
