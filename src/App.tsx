import { useState } from "react";
import "./App.css";
import Content from "./common/content";
import Footer from "./common/footer";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { useTheme as theme } from "./theme";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#EEE" }}>
      <ShoppingCartProvider theme={theme}>
        <Content />
        <Footer />
      </ShoppingCartProvider>
    </div>
  );
}
export default App;
