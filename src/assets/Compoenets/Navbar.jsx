import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className=" sticky top-0   w-full z-10  flex justify-center gap-4 items-center p-4 bg-gray-400">
        <NavLink
          to="/"
          className={({ isActive }) =>
             `${isActive ? "bg-gray-600 text-white px-3 py-2 rounded-3xl" : "text-gray-700 font-bold no-underline"}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/create-recipe"
          className={({ isActive }) =>
            `${isActive ? "bg-gray-600 text-white px-3 py-2 rounded-3xl" : "text-gray-700 font-bold no-underline"}`

          }
        >
          Create Recipe
        </NavLink>

        <NavLink
          to="/recipe"
          className={({ isActive }) =>
            `${isActive ? "bg-gray-600 text-white px-3 py-2 rounded-3xl" : "text-gray-700 font-bold no-underline"}`
          }
        >
          Recipe
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "bg-gray-600 text-white px-3 py-2 rounded-3xl" : "text-gray-700 font-bold no-underline"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/fav"
          className={({ isActive }) =>
            `${isActive ? "bg-gray-600 text-white px-3 py-2 rounded-3xl" : "text-gray-700 font-bold no-underline"}`
          }
        >
          Favorites
        </NavLink>
      </nav>
  );
};

export default Navbar;
