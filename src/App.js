import { BrowserRouter } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import Home from "./components/home/home.component";
import Background from "./components/background/background.component";
import Projects from "./components/projects/projects.component";
import About from "./components/about-me/about-me.component";
import Skills from "./components/skills/skills.component";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Background />
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
    </BrowserRouter>
  );
};

export default App;
