import { Link } from "react-router"

function CallBtn(){
    return(
        <div className="call-btn">
            <Link to="tel:0906756711"><i class="fa-solid fa-phone"></i>
            </Link>
        </div>
    )
}

export default CallBtn