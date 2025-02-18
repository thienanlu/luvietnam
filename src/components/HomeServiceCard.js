import Button from "./Button";

function HomeServiceCard(props){
    return(
            <div className="col-lg-4 col-sm-12">
                <div className="home-service-card">
                    <i class={props.icon}></i>
                    <h4>{props.title}</h4>
                    <Button link="/services" text="Chi tiết"/>
                </div>
            </div>
    )
}

export default HomeServiceCard;