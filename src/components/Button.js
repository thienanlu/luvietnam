import { Link } from "react-router-dom"

import '../assets/css/button.css'

function ButtonComponent(props){
    return (
        <Link to={props.link} className="button">{props.text}</Link>
    )
}

export default ButtonComponent;