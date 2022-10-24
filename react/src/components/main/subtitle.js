import { Link } from "react-router-dom";
import "../../css/main/subtitle.css";

function Subtitle(props) {
    const { title, label } = props;

    return (
        <div className="subtitle__container">
            <p className="subtitle__title">{title}</p>
            <Link className="subtitle__label" to="/">{label}</Link>
            <div className="subtitle__button">
                <button><img src={ require('../../assets/images/chevron-left.png') } alt="left"/></button>
                <button><img src={ require('../../assets/images/chevron-right.png') } alt="right"/></button>
            </div>
        </div>
    );
}

export default Subtitle;