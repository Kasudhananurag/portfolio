import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element= {<Home />} ></Route>
          <Route path='/about' element= {<About />} ></Route>
          <Route path='/contact' element= {<Contact />} ></Route>
          <Route path='/work' element= {<Projects />} ></Route>
          <Route path='*' element={<h1>404. Page not found</h1>} ></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
