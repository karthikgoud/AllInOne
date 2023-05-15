import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
