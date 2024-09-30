import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aid from './components/Aid';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Grant from './components/Grant';
import Suggestion from './components/Suggestion';
import About from './pages/About/About';
import Hero from './pages/Home/Hero';
import Results from './pages/Results/Results';
import FAQ from './pages/FAQ/FAQ';
import Courses from './pages/Courses/Courses';
import "./assets/css/index.css";

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/suggestion' element={<Suggestion />} />
          <Route path='/results' element={<Results />} />
          <Route path='/grant' element={<Grant />} />
          <Route path='/aid' element={<Aid />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;