import React from "react";

import { /*useMatchuseResolvedPath*/  Link } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  //const resolvedPath = useResolvedPath(to);
  //const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li>
      <Link
        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        to={to}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;