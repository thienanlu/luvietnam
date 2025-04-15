import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "./Header"
import Footer from "./Footer"
import CallBtn from "./CallBtn"

import '../assets/css/blog.css';

import BlogArticleImg1 from '../assets/img/blog1-img.jpg'
import BlogArticleImg2 from '../assets/img/blog2-img.jpg'
import BlogArticleImg3 from '../assets/img/blog3-img.webp'
import BlogArticleImg4 from '../assets/img/blog4-img.webp'

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
  
  const renderArticle3 = () => {
    navigate('/tong-hop-cac-tu-khoa-mo-ta-trai-nghiem-tieu-cuc')
  }

  const renderArticle4 = () => {
    navigate('/6-goi-y-kinh-doanh-trong-thoi-buoi-suy-thoai-kinh-te')
  }
    return (
        <div className="blog">
            <Helmet>
                <title>Tin tức & Bài viết</title>
                <meta name="description" content="Góc chia sẻ những kinh nghiệm kinh doanh ẩm thực được biên soạn bởi những chuyên gia giàu kinh nghiệm trong ngành ẩm thực, nhà hàng - khách sạn" />
            </Helmet>
            <Header active="3"/>
            <section className="blog-wrapper app-item mt-114">
                <h2 className="home-section-title">Bài viết nổi bật</h2>
                <section className="blog-gallery container">
                    <div className="row blog-gallery-wrapper">
                    <div className="col-lg-4 col-sm-12">
                        <div className="blog-card" onClick={renderArticle4}>
                                <img src={BlogArticleImg4} alt="ảnh đại diện cho bài viết về nồi hầm điện" />
                                <div className="blog-card-content">
                                    <h4 className="blog-card-title">6 Gợi ý cho các chủ quán đang kinh doanh trong thời buổi suy thoái kinh tế</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="blog-card" onClick={renderArticle3}>
                                <img src={BlogArticleImg3} alt="ảnh đại diện cho bài viết về nồi hầm điện" />
                                <div className="blog-card-content">
                                    <h4 className="blog-card-title">Tổng hợp các từ khóa thường được sử dụng để mô tả những trải nghiệm tiêu cực tại nhà hàng.</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="blog-card" onClick={renderArticle2}>
                                <img src={BlogArticleImg2} alt="ảnh đại diện cho bài viết về nồi hầm điện" />
                                <div className="blog-card-content">
                                    <h4 className="blog-card-title">4 điều cần lưu ý khi chọn 1 địa điểm kinh doanh ăn uống!</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="blog-card" onClick={renderArticle1}>
                                <img src={BlogArticleImg1} alt="ảnh đại diện cho bài viết về nồi hầm điện" />
                                <div className="blog-card-content">
                                    <h4 className="blog-card-title">Nồi hầm điện - Giải pháp nấu nướng hiện đại, tiện lợi và an toàn</h4>
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