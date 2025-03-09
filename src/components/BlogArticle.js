import { useNavigate } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

function BlogArticle(){
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
            <article className="article-wrapper app-item">
                <h3 className="article-title app-item-title">Nồi hầm điện - Giải pháp nấu nướng hiện đại, tiện lợi và an toàn</h3>
                <div className="article-info">
                    <p>Tác giả: Lữ Thuận Lợi</p>
                    <p>Ngày đăng: 09/03/2025 - 10 phút đọc</p>
                </div>
                <p className="article-content">
                    Trong nhịp sống hiện đại, việc nấu nướng không chỉ đòi hỏi món ăn ngon mà còn cần sự tiện lợi, an toàn và tiết kiệm. Nồi hầm điện nổi lên như một giải pháp thay thế hoàn hảo cho các phương pháp nấu nướng truyền thống như bếp gas hay than đá. Vậy, lý do nào khiến nồi hầm điện được ưa chuộng đến vậy? <br/>
                    <b>1. Tiết kiệm thời gian và công sức: </b><br />
                    Tự động hóa: Nồi hầm điện có chế độ nấu tự động, bạn chỉ cần cho nguyên liệu vào, chọn chế độ và thời gian phù hợp, sau đó có thể thoải mái làm việc khác mà không lo thức ăn bị cháy khét. <br />
                    Hẹn giờ nấu: Nhiều nồi hầm điện có chức năng hẹn giờ, giúp bạn chuẩn bị bữa ăn sẵn sàng vào đúng thời điểm mong muốn. <br/>
                    <b>2. An toàn và thân thiện với môi trường: </b> <br />
                    Không lo cháy nổ: Khác với bếp gas hay than đá, nồi hầm điện không sử dụng ngọn lửa trực tiếp, giảm thiểu nguy cơ cháy nổ, đặc biệt an toàn cho gia đình có trẻ nhỏ và người lớn tuổi. <br />
                    Không khói bụi: Nồi hầm điện không tạo ra khói bụi, giúp không gian bếp trong lành và bảo vệ sức khỏe người dùng.
                    Tiết kiệm năng lượng: Nồi hầm điện sử dụng điện năng hiệu quả, giúp tiết kiệm chi phí so với việc sử dụng gas hay than đá. <br/>
                    <b>3. Đa chức năng và tiện lợi: </b> <br />
                    Nấu đa dạng món ăn: Nồi hầm điện không chỉ dùng để hầm mà còn có thể nấu cháo, súp, làm bánh, nấu lẩu, tùy thuộc vào từng loại nồi và chế độ nấu. <br/>
                    Giữ nhiệt tốt: Lòng nồi được thiết kế đặc biệt giúp giữ nhiệt tốt, giữ cho món ăn nóng hổi trong thời gian dài. <br/>
                    Dễ dàng vệ sinh: Lòng nồi thường được làm từ chất liệu chống dính, dễ dàng vệ sinh sau khi sử dụng. <br/>
                    <b>4. Hương vị thơm ngon và dinh dưỡng: </b> <br />
                    Nấu chín đều: Nhiệt độ trong nồi hầm điện được kiểm soát ổn định, giúp thức ăn chín đều, giữ nguyên hương vị và dinh dưỡng. <br/>
                    Hầm nhừ: Nồi hầm điện hầm nhừ các loại thực phẩm cứng đầu như gân, xương, giúp món ăn mềm ngon, dễ tiêu hóa.
                </p>
            </article>

            <Footer />
        </div>
    )

}

export default BlogArticle;