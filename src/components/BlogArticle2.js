import { useNavigate } from "react-router";

import Header from "./Header";
import Footer from "./Footer";
import ButtonComponent from "./Button";
import CallBtn from "./CallBtn";
import ContactBanner from "./ContactBanner";

import ArticleProductImg from '../assets/img/product/product-img-9.jpg'

function BlogArticle2(){
    const navigate = useNavigate();
    const returnPrevious = () => {
        navigate(-1)
    }

    return (
        <div className="article-page">
            <Header active="3"/>
            <nav className="article-nav mt-114">
                <span onClick={returnPrevious}><i class="fa-solid fa-arrow-left"></i> Quay lại</span>
            </nav>
            <article className="article-wrapper">
                <h3 className="article-title app-item-title">4 điều cần lưu ý khi chọn 1 địa điểm kinh doanh ăn uống!</h3>
                <div className="article-info">
                    <p>Lữ Thuận Lợi</p>
                    <p>Ngày đăng: 12/03/2025</p>
                </div>
                <p className="article-content">
                4 điều cần lưu ý khi chọn 1 địa điểm kinh doanh ăn uống! Điều thứ 4 là cực kỳ quan trọng!!!! 
                    <p><b>1. Vị trí tốt: Như thế nào là vị trí tốt?</b></p>
                    <p>Khu dân cư đông đúc, đường lưu thông thuận tiện, mặt bằng không bị khuất, dân trí xung quanh tầm trung trở lên. </p>

                    <p><b>2. Giá thuê phù hợp: </b></p>
                    <p>Giá thuê cần phù hợp với khung giá thị trường, phù hợp với sản phẩm, phù hợp túi tiền cho phép. </p>

                    <p><b>3. Hợp đồng rõ ràng & minh bạch - trách nhiệm nghĩa vụ & quyền lợi</b> </p>

                    <p><b>4. Chủ nhà phải là tuýp người tử tế & hiểu chuyện biết nhiều và phải biết điều! </b> </p>
                    <p>Cần thiết hãy làm bài test khôn ngoan xem cách họ ứng xử</p>
                    <p>Nếu không đáp ứng những tiêu chí trên không cần vội chốt thuê chỉ vì quá mong muốn khởi nghiệp !!! Nếu không là bạn sẽ phải trả giá </p>
                    <p><i>Chúc bạn tìm được 1 vị trí ưng ý và thành công!</i></p>
                </p>
                <ContactBanner />
            </article>
            <CallBtn />
            <Footer />
        </div>
    )

}

export default BlogArticle2;