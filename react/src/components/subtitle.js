import "../css/subtitle.css";

function Subtitle(props) {
    const { title, label } = props;

    return (
        <div class="subtitle__container">
            <p class="subtitle__title">{title}</p>
            <a class="subtitle__label" href="#">{label}</a>
            <div class="subtitle__button">
                <button><img src="/images/chevron-left.png" alt="left"/></button>
                <button><img src="/images/chevron-right.png" alt="right"/></button>
            </div>
        </div>
    )

}

export default Subtitle;