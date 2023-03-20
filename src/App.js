import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
// import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App bg-primary_900">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
