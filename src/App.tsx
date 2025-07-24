import "./App.css";
import { Navbar } from "./component/Nav";
import { Hero } from "./component/Hero";
import { About } from "./component/About";
import { Project } from "./component/Project";
import { Contact } from "./component/Contact";
import { Form } from "./component/Form";
import { Footer } from "./component/Footer";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto  overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
