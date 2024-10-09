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
import Castle from './assets/images/saroy.png'; // Import the background image

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Background Image with Opacity */}
        <div
          className="fixed top-0 left-0 w-full h-full -z-10 opacity-50"
          style={{
            backgroundImage: `url(${Castle})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <div className="flex-grow container mx-auto">
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
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
