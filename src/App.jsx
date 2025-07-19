import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Section from "./components/Section/Section";

import "./App.css"

export default function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>

        <Banner/>
      </header>

      <main>
        <Section
          id="curiosidades"
        />
        <Section
          id="pinturas"
        />
        <Section
          id="invencoes"
        />
      </main>
    </div>
  );
}