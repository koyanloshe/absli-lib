import { textClassList } from "../../../utils/text";

/**
 * @typedef {import("../../../utils/types/TextCase").TextCase} TextCase
 * @typedef {import("../../../utils/types/TextAlignment").Alignment} Alignment
 * @typedef {import("../../../utils/types/FontWeight").FontWeight} FontWeight
 * @typedef {import("../../../utils/types/LineHeight").LineHeight} LineHeight
 * @typedef {import("../../../utils/types/TextSize").Size} Size
 * @typedef {import("react").ReactNode} ReactNode
 */

/**
 * Paragraph component
 * @function P
 * @param {string} className - Paragraph class default empty string
 * @param {boolean} textBreak - Add text-break to the Paragraph default true
 * @param {boolean} truncateText - Truncate text default true
 * @param {ReactNode} children - Paragraph content default empty string
 * @param {Size} size - Paragraph size default medium
 * @param {Alignment} alignment - Alignment default left
 * @param {TextCase} textCase - Text case default title
 * @param {FontWeight} fontWeight - Font weight default normal
 * @param {LineHeight} lineHeight - Line height 1, 1.25, 1.5, 2 default 1.5 (base)
 * @param {object} props - Additional props
 * @returns {JSX.Element}
 */

const P = ({
  className = "",
  children = "",
  textBreak = true,
  truncateText = true,
  alignment = "left",
  textCase = "sentence",
  fontWeight = "normal",
  size = "medium",
  lineHeight = 1.5,
  ...props
}) => {
  if (
    textCase === "sentence" &&
    typeof children === "string"
  ) {
    children =
      children.charAt(0).toUpperCase() + children.slice(1);
  }

  if (size.includes("overline")) {
    lineHeight = 1.25;
    textCase = "upper";
    if (size == "overline") {
      size = "fs-1";
    } else {
      size = "fs-2";
    }
  }

  return (
    <p
      className={textClassList({
        className,
        size,
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
    </p>
  );
};

export { P };
