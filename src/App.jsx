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
import Castle from './assets/images/saroy.png';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        {/* Background Image with Opacity */}
        <div
          className="fixed top-0 left-0 w-full h-full -z-10 opacity-60"
          style={{
            backgroundImage: `url(${Castle})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.6)', // Adjust brightness for readability
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          {/* Main Content */}
          <div className="flex-grow flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 bg-opacity-90 rounded-lg shadow-md text-center">
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
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
