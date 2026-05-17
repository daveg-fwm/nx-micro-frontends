import { Link } from "react-router";

export function Home() {
  return (
    <div className="content">
      <h1>
        <span className="mb-3 block">DOGS OR CATS</span>Rsbuild with React
      </h1>
      <p>Start building amazing things with Rsbuild.</p>

      <Link className="mt-4" to="/dogs">
        Go to Dogs
      </Link>
      <Link className="mt-4" to="/cats">
        Go to Cats
      </Link>
    </div>
  );
}
