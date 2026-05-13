import type { NavigateFunction } from "react-router";

interface DogsProps {
  navigate: NavigateFunction;
}

export function Dogs({ navigate }: DogsProps) {
  return (
    <div className="content content-dogs">
      <h1>
        <span className="mb-3 block">DOGS</span>Rsbuild with React
      </h1>
      <p>Start building amazing things with Rsbuild.</p>

      <button className="mt-4" onClick={() => navigate("/")}>
        Go back home
      </button>
    </div>
  );
}
