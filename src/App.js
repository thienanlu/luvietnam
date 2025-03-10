import {ScrollRestoration, Routes, Route, Router} from 'react-router-dom';

// import components
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Product from './components/Product';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Article1 from './components/BlogArticle'

import ScrollToTop from './components/ScrollToTop';
// import css files
import './App.css';

function App() {
  return (
    <>
      <div className="main">
         <Routes>
            <Route path="/luvietnam/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bai-viet-ve-noi-ham-dien" element={<Article1 />} />
         </Routes>
      </div>
    </>
  );
}

export default App;
