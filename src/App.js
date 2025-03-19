import { Routes, Route} from 'react-router-dom';

// import components
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Product from './components/Product';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Article1 from './components/BlogArticle'
import BlogArticle2 from './components/BlogArticle2';
import ServiceModel1 from './components/ServiceModel1';

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
            <Route path="/4-dieu-can-luu-y-khi-chon-dia-diem-kinh-doanh-an-uong" element={<BlogArticle2 />} />
            <Route path="/mo-hinh-quan-com-ga-da-gion" element={<ServiceModel1 />} />
         </Routes>
      </div>
    </>
  );
}

export default App;
