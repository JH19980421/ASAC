import "../css/subtitle.css";

function Subtitle(props) {
    const { title, label } = props;

    return (
        <div className="subtitle__container">
            <p className="subtitle__title">{title}</p>
            <a className="subtitle__label" href="#">{label}</a>
            <div className="subtitle__button">
                <button><img src="/images/chevron-left.png" alt="left"/></button>
                <button><img src="/images/chevron-right.png" alt="right"/></button>
            </div>
        </div>
    );
}

export default Subtitle;