import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PreOrder from "./components/preorder/Preorder";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <HashRouter>
				<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thuc-cafe" element={<Home />}></Route>
          <Route path="/pre-order" element={<PreOrder />}></Route>
					<Route path="/about-us" element={<About />}></Route>
				</Routes>
			</HashRouter>
      <Footer />
    </div>
  );
}

export default App;
