/**
 * @typedef {import("../../../utils/types/TextCase").TextCase} TextCase
 * @typedef {import("../../../utils/types/TextAlignment").Alignment} Alignment
 * @typedef {import("../../../utils/types/HeadingVariant").Variant} Variant
 * @typedef {import("../../../utils/types/FontWeight").FontWeight} FontWeight
 * @typedef {import("../../../utils/types/LineHeight").LineHeight} LineHeight
 * @typedef {import("react").ReactNode} ReactNode
 */

/**
 * @typedef Props
 * @property {string} className - Heading class default empty string
 * @property {boolean} textBreak - Add text-break to the heading default true
 * @property {boolean} truncateText - Truncate text default true
 * @property {ReactNode} children - Heading content default empty string
 * @property {Variant} variant - Heading level (1-6) default 1
 * @property {Alignment} alignment - Alignment default left
 * @property {TextCase} textCase - Text case default title
 * @property {FontWeight} fontWeight - Font weight default normal
 * @property {LineHeight} lineHeight - Line height 1, 1.25, 1.5, 2 default 1.5 (base)
 * @property {object} props - Additional props
 */

// @type Props
export const Props = {};
