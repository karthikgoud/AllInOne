import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import WishList from "./components/WishList/WishList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
