import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					{/* <Route path="/about" element={<About />}></Route> */}
				</Routes>
			</BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
