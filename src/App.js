import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/page/Home/Home';
import About from './components/page/About/About';
import Footer from './components/Footer/Footer';
import Services from './components/page/Services/Services';
import Booking from './components/page/Booking/Booking';
import Error404 from './components/Error404/Error404';
import Contact from './components/page/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
