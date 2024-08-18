import "./app.scss";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
      </section>
      <section>Parallax</section>
      <section id="Servicios">Services</section>
      <section>Parallax</section>
      <section>Portfolio 1</section>
      <section>Portfolio 2</section>
      <section>Portfolio 3</section>
      <section>Contact</section>
    </div>
  );
}

export default App;
