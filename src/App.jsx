import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CartPage from "./pages/Cart.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { Cartprovider } from "./context/cartContext.jsx";
import Header from "./components/Header";
import Ordersucess from "./pages/Odersucess.jsx";

function App()  {
  return (
    <Cartprovider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/success" element={<Ordersucess />} />
      </Routes>
      </BrowserRouter>
    </Cartprovider>
  );
}
export default App;