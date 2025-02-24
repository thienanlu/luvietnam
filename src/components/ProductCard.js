import ButtonComponent from "./Button";

import '../assets/css/productcard.css'

function ProductCard(props){
    return (
        <div className="col-lg-3 col-sm-12">
            <div className="product-card">
                <img src={props.img} alt="" />
                <div className="product-card-text">
                    <h4 className="product-card-name">{props.name}</h4>
                    <ButtonComponent link="/contact" text="Liên hệ" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;