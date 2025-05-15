import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Header from "./Header";
import Footer from "./Footer";
import ButtonComponent from "./Button";
import CallBtn from "./CallBtn";

import ArticleProductImg from '../assets/img/product/product-img-9.jpg'

function BlogArticle(){
    useEffect(() => {
                    window.scrollTo(0, 0);
                  }, []);

    const navigate = useNavigate();
    const returnPrevious = () => {
        navigate('/tin-tuc')
    }

    return (
        <div className="article-page">
            <Helmet prioritizeSeoTags>
                <title>Nồi hầm điện - Giải pháp nấu nướng hiện đại, tiện lợi và an toàn</title>
                <meta name="description" content="Lợi ích của nồi hầm điện - sản phẩm nấu nướng thông minh - an toàn - tiện lợi" />
                <meta name="keywords" content="Nồi hầm điện, Nấu ăn nhanh, Nấu ăn an toàn, Nấu ăn tiết kiệm" />
                <meta property="og:title" content="Nồi hầm điện - Giải pháp nấu nướng hiện đại, tiện lợi và an toàn" />
                <meta property="og:image" content="thumbnail.jpg" />
                <meta property="og:description" content="Lợi ích của nồi hầm điện - sản phẩm nấu nướng thông minh - an toàn - tiện lợi" />
            </Helmet>
            <Header active="3"/>
            <nav className="article-nav">
                <span onClick={returnPrevious}><i className="fa-solid fa-arrow-left"></i> Quay lại</span>
            </nav>
            <article className="article-wrapper">
                <h3 className="article-title app-item-title">Nồi hầm điện - Giải pháp nấu nướng hiện đại, tiện lợi và an toàn</h3>
                <div className="article-info">
                    <p>Lu Vietnam</p>
                    <p>Ngày đăng: 09/03/2025</p>
                </div>
                <div className="article-content">
                    Trong nhịp sống hiện đại, việc nấu nướng không chỉ đòi hỏi món ăn ngon mà còn cần sự tiện lợi, an toàn và tiết kiệm. Nồi hầm điện nổi lên như một giải pháp thay thế hoàn hảo cho các phương pháp nấu nướng truyền thống như bếp gas hay than đá. Vậy, lý do nào khiến nồi hầm điện được ưa chuộng đến vậy?
                    <p><b>1. Tiết kiệm thời gian và công sức: </b></p>
                    <li>Tự động hóa: Nồi hầm điện có chế độ nấu tự động, bạn chỉ cần cho nguyên liệu vào, chọn chế độ và thời gian phù hợp, sau đó có thể thoải mái làm việc khác mà không lo thức ăn bị cháy khét.</li>
                    <li>Hẹn giờ nấu: Nhiều nồi hầm điện có chức năng hẹn giờ, giúp bạn chuẩn bị bữa ăn sẵn sàng vào đúng thời điểm mong muốn. </li>

                    <p><b>2. An toàn và thân thiện với môi trường: </b></p>
                    <li>Không lo cháy nổ: Khác với bếp gas hay than đá, nồi hầm điện không sử dụng ngọn lửa trực tiếp, giảm thiểu nguy cơ cháy nổ, đặc biệt an toàn cho gia đình có trẻ nhỏ và người lớn tuổi. </li>
                    <li>Không khói bụi: Nồi hầm điện không tạo ra khói bụi, giúp không gian bếp trong lành và bảo vệ sức khỏe người dùng. </li>
                    <li>Tiết kiệm năng lượng: Nồi hầm điện sử dụng điện năng hiệu quả, giúp tiết kiệm chi phí so với việc sử dụng gas hay than đá. </li>

                    <p><b>3. Đa chức năng và tiện lợi: </b> </p>
                    <li>Nấu đa dạng món ăn: Nồi hầm điện không chỉ dùng để hầm mà còn có thể nấu cháo, súp, làm bánh, nấu lẩu, tùy thuộc vào từng loại nồi và chế độ nấu. </li>
                    <li>Giữ nhiệt tốt: Lòng nồi được thiết kế đặc biệt giúp giữ nhiệt tốt, giữ cho món ăn nóng hổi trong thời gian dài. </li>
                    Dễ dàng vệ sinh: Lòng nồi thường được làm từ chất liệu chống dính, dễ dàng vệ sinh sau khi sử dụng. <br/>

                    <p><b>4. Hương vị thơm ngon và dinh dưỡng: </b> </p>
                    <li>Nấu chín đều: Nhiệt độ trong nồi hầm điện được kiểm soát ổn định, giúp thức ăn chín đều, giữ nguyên hương vị và dinh dưỡng. </li>
                    <li>Hầm nhừ: Nồi hầm điện hầm nhừ các loại thực phẩm cứng đầu như gân, xương, giúp món ăn mềm ngon, dễ tiêu hóa. </li>
                </div>
                <div className="article-product-banner row">
                    <img src={ArticleProductImg} className="article-img col-lg-3 col-sm-12" alt=""/>
                    <div className="article-product-banner__text col-lg-9 col-sm-12">
                        <h3 className="article-product-banner__title">Nồi hầm điện - Nồi phở Inox điện</h3>
                        <ButtonComponent link="/lien-he" text="Liên hệ mua hàng ngay" />
                        <ButtonComponent link="/san-pham" text="Xem danh mục sản phẩm" />
                    </div>
                </div>
            </article>
            <CallBtn />
            <Footer />
        </div>
    )

}

export default BlogArticle;