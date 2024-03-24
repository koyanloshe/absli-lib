import React, { lazy, Suspense } from "react";

/**
 * @typedef {import("./index.type").Props} Props
 */

/**
 * @name MonotoneIcon
 * @description MonotoneIcon component is used to render the icon with the given name.
 * @param {Props} props - The props passed to the component.
 * @returns {React.Component} A React component that displays the icon.
 */
const MonotoneIcon = ({
  className = "tc-red-500",
  altText = "icon",
  iconName = "ArrowUp",
  ...props
}) => {
  const Image = lazy(
    () => import(`./icons/${iconName}.jsx`),
  );

  return (
    <div className={className}>
      <Suspense>
        <Image
          alt={altText}
          className="img-fluid w-100 img-icon"
          {...props}
        />
      </Suspense>
    </div>
  );
};

export default MonotoneIcon;
