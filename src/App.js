import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import Home from "./components/home/home.component";
import Background from "./components/background/background.component";
import About from "./components/about-me/about-me.component";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Background />
      <Navigation />
      <Home />
      <About />
    </BrowserRouter>
  );
};

export default App;
