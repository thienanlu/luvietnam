import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import CallBtn from "./CallBtn";
import ContactBanner from "./ContactBanner";

function BlogArticle3(){
    useEffect(() => {
                window.scrollTo(0, 0);
              }, []);

    const navigate = useNavigate();
    const returnPrevious = () => {
        navigate('/tin-tuc')
    }

    return (
        <div className="article-page">
            <Helmet>
                <title>Tổng hợp các từ khóa thường được sử dụng để mô tả những trải nghiệm tiêu cực tại nhà hàng</title>
                <meta name="description" content="Những từ khoá được sử dụng cho thấy khách hàng không hài lòng với dịch vụ nhà hàng của bạn hoặc có trải nghiệm tiêu cực đối với dịch vụ của bạn" />
                <meta name="keywords" content="không hài lòng, nhà hàng, dịch vụ, trải nghiệm, tiêu cực, khó chịu, từ khoá" />
                <meta property="og:title" content="Tổng hợp các từ khóa thường được sử dụng để mô tả những trải nghiệm tiêu cực tại nhà hàng" />
                <meta property="og:image" content="thumbnail.jpg" />
                <meta property="og:description" content="Những từ khoá được sử dụng cho thấy khách hàng không hài lòng với dịch vụ nhà hàng của bạn hoặc có trải nghiệm tiêu cực đối với dịch vụ của bạn" />
            </Helmet>
            <Header active="3"/>
            <nav className="article-nav">
                <span onClick={returnPrevious}><i class="fa-solid fa-arrow-left"></i> Quay lại</span>
            </nav>
            <article className="article-wrapper">
                <h3 className="article-title app-item-title">Tổng hợp các từ khóa thường được sử dụng để mô tả những trải nghiệm tiêu cực tại nhà hàng</h3>
                <div className="article-info">
                    <p>Lu Vietnam</p>
                    <p>Ngày đăng: 27/03/2025</p>
                </div>
                <p className="article-content">
                    Tổng hợp các từ khóa thường được sử dụng để mô tả những trải nghiệm tiêu cực tại nhà hàng. 
                    <p><i>Các từ này bao gồm: </i></p>
                    <p> 'tệ', 'dở', 'khó chịu', 'bẩn', 'chậm', 'đắt', 'không đáng', 'thất vọng', 'thiếu chuyên nghiệp', 'không tươi', 'lạnh', 'mặn', 'nhạt', 'hôi', 'ồn ào', 'vô tâm', 'cẩu thả', 'sai món', 'hết món', 'không sạch sẽ'. </p>
                    <p>Đây là những dấu hiệu cho thấy khách hàng có thể không hài lòng và có khả năng không quay lại.</p>
                </p>
                <ContactBanner />
            </article>
            <CallBtn />
            <Footer />
        </div>
    )

}

export default BlogArticle3;