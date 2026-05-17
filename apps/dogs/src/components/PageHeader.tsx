import clsx from "clsx";
import { NavLink } from "react-router";

export function PageHeader() {
  const linkClassNames = (isActive: boolean) =>
    clsx("p-2 hover:text-indigo-400", isActive && "text-indigo-500");

  return (
    <header className="text-center mb-8">
      <h1 className="text-6xl font-bold text-indigo-500">Dog Breed Viewer</h1>
      <p className="mt-2 mb-4 text-2xl text-gray-500">Explore our collection of furry friends!</p>

      <nav>
        <ul className="flex justify-center">
          <li>
            <NavLink to="/" className={({ isActive }) => linkClassNames(isActive)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/breeds" className={({ isActive }) => linkClassNames(isActive)}>
              Breeds
            </NavLink>
          </li>
          <li>
            <NavLink to="/sub-breeds" className={({ isActive }) => linkClassNames(isActive)}>
              Sub-breeds
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
