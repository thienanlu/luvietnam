import { Link } from "react-router"

function CallBtn(){
    return(
        <div className="call-btn">
            <Link to="tel:0329291914"><i class="fa-solid fa-phone"></i>
            </Link>
        </div>
    )
}

export default CallBtn