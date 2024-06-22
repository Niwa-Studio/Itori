import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Gallery from "./components/Gallery";

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <Gallery />
    </>
  );
}
export default App;
