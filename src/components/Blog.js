import { useNavigate } from "react-router";
import Header from "./Header"
import Footer from "./Footer"
import CallBtn from "./CallBtn"
import BlogArticle from "./BlogArticle";

import '../assets/css/blog.css';

import BlogArticleImg1 from '../assets/img/product/product-img-9.jpg'

function Blog(){
    const navigate = useNavigate();

  const renderArticle1 = () => {
    // Basic navigation to '/about'
    navigate('/bai-viet-ve-noi-ham-dien');
  };

    return (
        <div className="blog">
            <Header active="3"/>
            <section className="blog-wrapper app-item mt-114">
                <h2 className="home-section-title">Bài viết nổi bật</h2>
                <section className="blog-gallery container">
                    <div className="blog-card" onClick={renderArticle1}>
                        <div className="blog-card-content">
                            <h4 className="blog-card-title">Nồi hầm điện - Giải pháp nấu nướng hiện đại, tiện lợi và an toàn</h4>
                            <p>Tác giả: Lữ Thuận Lợi</p>
                        </div>
                        <img src={BlogArticleImg1} alt="ảnh đại diện cho bài viết về nồi hầm điện" />
                    </div>
                    <div className="blog-card">
                        <div className="blog-card-content">
                            <h4 className="blog-card-title">Nồi hầm điện - Giải pháp nấu nướng hiện đại, tiện lợi và an toàn</h4>
                            <p>Tác giả: Lữ Thuận Lợi</p>
                        </div>
                        <img src={BlogArticleImg1} alt="ảnh đại diện cho bài viết về nồi hầm điện" />
                    </div>
                </section>
            </section>
            <CallBtn />
            <Footer />
        </div>
    )
}

export default Blog