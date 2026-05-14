import type { NavigateFunction } from "react-router";

interface CatsProps {
  navigate: NavigateFunction;
}

export function Cats({ navigate }: CatsProps) {
  return (
    <div className="content">
      <h1>
        <span className="mb-3 block">CATS</span>Vite with React
      </h1>
      <p>Start building amazing things with Vite.</p>

      <button className="mt-4" onClick={() => navigate("/")}>
        Go back home
      </button>
    </div>
  );
}
