import Cart from "./pages/cart/Cart";
import ProductDetails from "./pages/productdetail/ProductDetails";
import ProductListing from "./pages/productlisting/ProductListing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wishlist from "./pages/wishlist/Wishlist";
import "./main.scss";
import Header from "./layout/header/Header";
import Home from "./pages/home/Home";
import Footer from "./layout/footer/Footer";
import Category from "./pages/category/Category";
import SingleCategory from "./layout/singlecategory/SingleCategory";
import Toastify from "./customtoast/Toastify";

function App() {
  return (
    <>
      <Toastify />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/categories" element={<Category />} />
          <Route
            path="/categories/:categoryname"
            element={<SingleCategory />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
