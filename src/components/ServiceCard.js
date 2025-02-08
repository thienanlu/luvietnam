import Button from "./Button";

import '../assets/css/servicecard.css'

function ServiceCard(props){
    return(
        <div className="service-card col-lg-4 col-sm-12">
            <div className="service-card-wrapper">
                <h3 className="service-card-name">{props.name}</h3>
                <img src={props.image} alt="Sample restaurant setted up by Luvietnam" />
                <Button link="/contact" text="Liên hệ nhận tư vấn" />
            </div>
        </div>
    )
}

export default ServiceCard;