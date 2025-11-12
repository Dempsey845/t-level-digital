import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-gray-100 shadow-sm">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold" : "text-gray-700"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/flashcards"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold" : "text-gray-700"
        }
      >
        Flashcards
      </NavLink>
    </nav>
  );
}
