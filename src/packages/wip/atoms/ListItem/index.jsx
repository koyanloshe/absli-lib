import React from "react";

const ListItem = ({ children, ...props }) => {
  return (
    <li
      className="list-group-item list-group-item-action active"
      {...props}
    >
      {children}
    </li>
  );
};

export default ListItem;
