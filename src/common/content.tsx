import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MainCart from "../pages/MainCart";
import Orderlist from "../pages/Orderlist"
import NavbarComponent from "../common/navbar";

const Content = () => {
  return (
    <>
      <HashRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" Component={MainPage}></Route>
          <Route path="/cart" Component={MainCart}></Route>
          <Route path="/orderlist" Component={Orderlist}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};
export default Content;
