import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Nav />
     <About />
     <Projects />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
