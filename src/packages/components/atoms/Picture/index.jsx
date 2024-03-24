import Image from "next/image";

/**
 *  @typedef {import("./index.types.js").Props} Props
 */

/**
 * @name Picture
 * @description The Picture component is a wrapper around the Next.js Image component.
 * @param {Props} props- The component props
 * @returns {React.Component} The Picture component
 */
const Picture = ({
  loading = "lazy",
  className = "",
  src = "https://via.placeholder.com/1920x1080",
  alt = "placeholder",
  width = 640,
  height = 480,
  aspectRatio = "16x9",
  ...props
}) => {
  return (
    <Image
      alt={alt}
      className={`${className} ratio img-fluid ratio-${aspectRatio}`}
      height={height}
      loading={loading}
      src={src}
      width={width}
      {...props}
    />
  );
};

export default Picture;
