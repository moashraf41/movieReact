import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import reactBootstrap
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MovieContainer from "./components/MovieContainer/MovieContainer";

function App() {
  return (
    <>
      <Navbar />
      <MovieContainer />
    </>
  );
}

export default App;
