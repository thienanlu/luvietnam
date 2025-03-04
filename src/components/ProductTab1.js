import ProductCard from './ProductCard';

// import product image
import Product1 from '../assets/img/product/product-img-1.jpg'
import Product2 from '../assets/img/product/product-img-2.jpg'
import Product3 from '../assets/img/product/product-img-3.jpg'
import Product4 from '../assets/img/product/product-img-4.jpg'
import Product5 from '../assets/img/product/product-img-5.jpg'
import Product6 from '../assets/img/product/product-img-6.jpg'
import Product7 from '../assets/img/product/product-img-7.jpg'
import Product8 from '../assets/img/product/product-img-8.jpg'
import Product9 from '../assets/img/product/product-img-9.jpg'
import Product10 from '../assets/img/product/product-img-10.jpg'
import Product11 from '../assets/img/product/product-img-11.jpg'
import Product12 from '../assets/img/product/product-img-12.jpg'
import Product13 from '../assets/img/product/product-img-13.jpg'
import Product14 from '../assets/img/product/product-img-14.jpg'

import '../assets/css/producttab.css'


function ProductTab1(){
    return(
        <div className="product-gallery">
            <div class="accordion product-accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Thiết bị bếp
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne"class="accordion-collapse collapse" data-bs-parent="accordionPanelsStayOpenExample">
                    <div class="accordion-body container">
                        <div className='row'>
                            <ProductCard name="Nồi phở Inox điện" img={Product9}/>
                            <ProductCard name="Tủ đông đứng" img={Product10}/>
                            <ProductCard name="Tủ đông đứng công nghiệp" img={Product12}/>
                            <ProductCard name="Tủ mát Sanaky công nghiệp" img={Product5}/>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Nội thất quán
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" data-bs-parent="accordionPanelsStayOpenExample">
                        <div class="accordion-body container">
                            <div className='row'>
                                <ProductCard name="Bàn vuông 60X60" img={Product13}/>
                                <ProductCard name="Ghế đôn chân sắt" img={Product11}/>
                                <ProductCard name="Máy Pos in bill" img={Product8}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Dụng cụ phục vụ
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" data-bs-parent="accordionPanelsStayOpenExample">
                    <div class="accordion-body container">
                        <div className='row'>
                            <ProductCard name="Dĩa rau nhựa cao cấp" img={Product1}/>
                            <ProductCard name="Muỗng Inox bầu" img={Product2}/>
                            <ProductCard name="Tô nhựa cao cấp" img={Product3}/>
                            <ProductCard name="Khay Inox" img={Product4}/>
                            <ProductCard name="Gắp Inox" img={Product6}/>
                            <ProductCard name="Đũa gỗ" img={Product7}/>
                            <ProductCard name="Chén chấm" img={Product14}/>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        Nguyên liệu & Thực phẩm
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" data-bs-parent="accordionPanelsStayOpenExample">
                    <div class="accordion-body container">
                        <div className='row'>
                            <ProductCard name="Dĩa rau nhựa cao cấp" img={Product1}/>
                            <ProductCard name="Muỗng Inox bầu" img={Product2}/>
                            <ProductCard name="Tô nhựa cao cấp" img={Product3}/>
                            <ProductCard name="Khay Inox" img={Product4}/>
                            <ProductCard name="Gắp Inox" img={Product6}/>
                            <ProductCard name="Đũa gỗ" img={Product7}/>
                            <ProductCard name="Chén chấm" img={Product14}/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTab1;