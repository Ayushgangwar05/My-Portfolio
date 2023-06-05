import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import MyExperience from "./components/MyExperience";
import MyEducation from "./components/MyEducation";
import Secondlast from "./components/Secondlast";
import Contact from "./components/Contact";
import "../src/components/App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Experience />
      <MyExperience />
      <MyEducation />
      <Secondlast />
      <Contact />
    </div>
  );
}

export default App;
