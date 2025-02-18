import {ScrollRestoration, Routes, Route, Router} from 'react-router-dom';

// import components
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Product from './components/Product';
import Contact from './components/Contact';

import ScrollToTop from './components/ScrollToTop';
// import css files
import './App.css';

function App() {
  return (
    <>
      <div className="main">
         <Routes>
            {/* <ScrollRestoration /> */}
            <Route path="/luvietnam/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </div>
    </>
  );
}

export default App;
