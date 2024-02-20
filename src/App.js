import logo from './logo.svg';
import './App.css';

import About from './Components/Components/About/About';
import Home from './Components/Components/Home/Home';
import Projects from'./Components/Components/Projects/Projects';
import Skills from './Components/Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
