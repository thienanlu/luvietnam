import ButtonComponent from "./Button";

import '../assets/css/productcard.css'

function ProductCard(props){
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="product-card">
                <img src={props.img} alt="" />
                <div className="product-card-text">
                    <ButtonComponent link="/lien-he" text="Liên hệ" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;