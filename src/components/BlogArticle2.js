import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Header from "./Header";
import Footer from "./Footer";
import CallBtn from "./CallBtn";
import ContactBanner from "./ContactBanner";

function BlogArticle2(){
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
                <title>4 điều cần lưu ý khi chọn 1 địa điểm kinh doanh ăn uống</title>
                <meta name="description" content="Những lưu ý dành cho chủ quán khi lựa chọn địa điểm khởi nghiệp - kinh doanh ăn uống" />
                <meta name="keywords" content="Vị trí, quán ăn, kinh doanh, địa điểm, khởi nghiệp" />
                <meta property="og:title" content="4 điều cần lưu ý khi chọn 1 địa điểm kinh doanh ăn uống" />
                <meta property="og:image" content="thumbnail.jpg" />
                <meta property="og:description" content="Những lưu ý dành cho chủ quán khi lựa chọn địa điểm khởi nghiệp - kinh doanh ăn uống" />
            </Helmet>
            <Header active="3"/>
            <nav className="article-nav">
                <span onClick={returnPrevious}><i class="fa-solid fa-arrow-left"></i> Quay lại</span>
            </nav>
            <article className="article-wrapper">
                <h3 className="article-title app-item-title">4 điều cần lưu ý khi chọn 1 địa điểm kinh doanh ăn uống!</h3>
                <div className="article-info">
                    <p>Lu Vietnam</p>
                    <p>Ngày đăng: 12/03/2025</p>
                </div>
                <div className="article-content">
                4 điều cần lưu ý khi chọn 1 địa điểm kinh doanh ăn uống! Điều thứ 4 là cực kỳ quan trọng!!!! 
                    <p><span className="article-main-point"><b>1. Vị trí tốt: Như thế nào là vị trí tốt?</b></span></p>
                    <p>Khu dân cư đông đúc, đường lưu thông thuận tiện, mặt bằng không bị khuất, dân trí xung quanh tầm trung trở lên. </p>
                    <p><span className="article-main-point"><b>2. Giá thuê phù hợp: </b></span></p>
                    <p>Giá thuê cần phù hợp với khung giá thị trường, phù hợp với sản phẩm, phù hợp túi tiền cho phép. </p>

                    <p><span className="article-main-point"><b>3. Hợp đồng rõ ràng & minh bạch - trách nhiệm nghĩa vụ & quyền lợi</b> </span></p>

                    <p><span className="article-main-point"><b>4. Chủ nhà phải là tuýp người tử tế & hiểu chuyện biết nhiều và phải biết điều! </b> </span></p>
                    <p>Cần thiết hãy làm bài test khôn ngoan xem cách họ ứng xử</p>
                    <p>Nếu không đáp ứng những tiêu chí trên không cần vội chốt thuê chỉ vì quá mong muốn khởi nghiệp !!! Nếu không là bạn sẽ phải trả giá </p>
                    <p><i>Chúc bạn tìm được 1 vị trí ưng ý và thành công!</i></p>
                </div>
                <ContactBanner />
            </article>
            <CallBtn />
            <Footer />
        </div>
    )

}

export default BlogArticle2;