import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/about';
import Contact from './Pages/contact';
import Home from './Pages/home';
import Skills from './Pages/skills';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
