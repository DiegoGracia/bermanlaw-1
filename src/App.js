import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import "./App.css";

import { HeroDataEspañol } from "./data/HeroData";

function App() {
  return (
    <>
      <Navbar/>
      <Hero HeroTitle={HeroDataEspañol.heroHeader} HeroBody={HeroDataEspañol.heroBody} HeroSubtitle={HeroDataEspañol.heroSubTitle}/>
      <Section/>
      <Footer/>
    </>
  );
}

export default App;
