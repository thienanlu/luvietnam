import { Link } from "react-router-dom"

function CallBtn(){
    return(
        <div className="call-btn">
            <div class="hotline-phone-ring-circle"></div>
            <div class="hotline-phone-ring-circle-fill"></div>
            <Link to="tel:0906756711"><i class="fa-solid fa-phone"></i>
            </Link>
        </div>
    )
}

export default CallBtn