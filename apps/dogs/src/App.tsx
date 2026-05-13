import "./App.css";

import { useNavigate } from "react-router";

import { Dogs } from "./Dogs";

const App = () => {
  const navigate = useNavigate();

  return <Dogs navigate={navigate} />;
};

export default App;
