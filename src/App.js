import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Schedule from "./components/Schedule/Schedule";
import Description from "./components/Description/Description";
import Logos from "./components/Logos/Logos";
import Footer from "./components/Footer/Footer";
import "./App.css";

import { HeroDataEspañol } from "./data/HeroData";

function App() {
  return (
    <>
      <Navbar/>
      <Hero HeroTitle={HeroDataEspañol.heroHeader} HeroBody={HeroDataEspañol.heroBody}/>
      <Section/>
      <Schedule/>
      <Description/>
      <Logos/>
      <Footer/>
    </>
  );
}

export default App;
