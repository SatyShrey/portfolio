import About from "./About";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Works from "./Works";

export default function App() {
  return (
    <div className="text-gray-800 bg-white font-[Poppins]">
      <Header />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
    </div>
  )
}
