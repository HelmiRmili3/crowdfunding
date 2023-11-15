import React from "react";

import { useMatch,useResolvedPath, Link } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const linkClasses = `block py-2 pl-3 pr-4 rounded-3xl hover:bg-gray-100 ${
    isActive
      ? "bg-gray-500 text-white" // Apply gray background for active link
      : "text-gray-900"
  }`;
  return (
    <li>
      <Link className={linkClasses}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;
