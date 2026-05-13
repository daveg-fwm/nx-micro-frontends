import "./App.css";
import { Dogs } from "dogs/dog-app";

const App = () => {
  return (
    <>
      <div className="content">
        <h1>
          <span className="mb-3 block">DOGS OR CATS</span>Rsbuild with React
        </h1>
        <p>Start building amazing things with Rsbuild.</p>
      </div>
      <Dogs />
    </>
  );
};

export default App;
