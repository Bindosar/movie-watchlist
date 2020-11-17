import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <MoviesList />
      <Footer />
    </>
  );
}
export default App;
