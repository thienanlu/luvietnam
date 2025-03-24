import { useNavigate } from "react-router";
import { useEffect } from "react";

import Header from "./Header"
import Footer from "./Footer"
import CallBtn from "./CallBtn"

import '../assets/css/blog.css';

import BlogArticleImg1 from '../assets/img/blog1-img.jpg'
import BlogArticleImg2 from '../assets/img/blog2-img.jpg'

function Blog(){
    useEffect(() => {
                    window.scrollTo(0, 0);
                  }, []);

    const navigate = useNavigate();

  const renderArticle1 = () => {
    // Basic navigation to '/about'
    navigate('/bai-viet-ve-noi-ham-dien');
  };

  const renderArticle2 = () => {
    navigate('/4-dieu-can-luu-y-khi-chon-dia-diem-kinh-doanh-an-uong')
  }

    return (
        <div className="blog">
            <Header active="3"/>
            <section className="blog-wrapper app-item mt-114">
                <h2 className="home-section-title">Bài viết nổi bật</h2>
                <section className="blog-gallery container">
                    <div className="row blog-gallery-wrapper">
                    <div className="col-lg-4 col-sm-12">
                            <div className="blog-card" onClick={renderArticle2}>
                                <img src={BlogArticleImg2} alt="ảnh đại diện cho bài viết về nồi hầm điện" />
                                <div className="blog-card-content">
                                    <h4 className="blog-card-title">4 điều cần lưu ý khi chọn 1 địa điểm kinh doanh ăn uống!</h4>
                                    <p>Tác giả: Lữ Thuận Lợi</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="blog-card" onClick={renderArticle1}>
                                <img src={BlogArticleImg1} alt="ảnh đại diện cho bài viết về nồi hầm điện" />
                                <div className="blog-card-content">
                                    <h4 className="blog-card-title">Nồi hầm điện - Giải pháp nấu nướng hiện đại, tiện lợi và an toàn</h4>
                                    <p>Tác giả: Lữ Thuận Lợi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <CallBtn />
            <Footer />
        </div>
    )
}

export default Blog