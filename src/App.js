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
import BlogArticle3 from './components/BlogArticle3';
import BlogArticle4 from './components/BlogArticle4';
import ServiceModel1 from './components/ServiceModel1';
import ServiceModel2 from './components/ServiceModel2';
import ServiceModel3 from './components/ServiceModel3';
import ProjectDetail1 from './components/ProjectDetail1';
import ProjectDetail2 from './components/ProjectDetail2';

// import css files
import './App.css';

function App() {
  return (
    <>
      <div className="main">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/tin-tuc" element={<Blog />} />
            <Route path="/dich-vu" element={<Services />} />
            <Route path="/san-pham" element={<Product />} />
            <Route path="/lien-he" element={<Contact />} />

            <Route path="/bai-viet-ve-noi-ham-dien" element={<Article1 />} />
            <Route path="/4-dieu-can-luu-y-khi-chon-dia-diem-kinh-doanh-an-uong" element={<BlogArticle2 />} />
            <Route path="/tong-hop-cac-tu-khoa-mo-ta-trai-nghiem-tieu-cuc" element={<BlogArticle3 />} />
            <Route path="/6-goi-y-kinh-doanh-trong-thoi-buoi-suy-thoai-kinh-te" element={<BlogArticle4 />} />

            <Route path="/mo-hinh-quan-com-ga-da-gion" element={<ServiceModel1 />} />
            <Route path="/mo-hinh-quan-bun-bo-hue" element={<ServiceModel2 />} />
            <Route path="/mo-hinh-kiosk" element={<ServiceModel3 />} />

            <Route path="/du-an-bun-bo-hue-ngon-so-1" element={<ProjectDetail1 />} />
            <Route path="/du-an-bun-bo-hue-ngon" element={<ProjectDetail2 />} />
         </Routes>
      </div>
    </>
  );
}

export default App;
