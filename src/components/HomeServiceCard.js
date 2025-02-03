import Button from "./Button";

function HomeServiceCard(props){
    return(
            <div className="col-lg-3 col-sm-12">
                <div className="home-service-card">
                    <i class="fa-solid fa-lightbulb"></i>
                    <h4>{props.title}</h4>
                    <Button link="/services" text="Chi tiết"/>
                </div>
            </div>
    )
}

export default HomeServiceCard;