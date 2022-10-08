
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";

import { useEffect } from "react";
import useReactPath from "./hooks/useReactPath.jsx";

function App() {

  let location = useReactPath();

  useEffect(() => {
    console.log(location)
  },[location])
  return (

    <div className="animate-changeBg">
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Project/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
