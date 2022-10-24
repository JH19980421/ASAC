import "../../css/main/event.css";

const eventItems = require("../../event.json");

function Event() {
    return (
        <div className="container__event">
            {
                eventItems.map((item) => (
                    <div className="event__card">
                        <img src={item.imageUrl} alt="event"/>
                        <div className="event__badge-container">
                            {
                                item.badges.map((it) => (
                                    <div className="event__badge">{it.badge} {it.id}</div>
                                ))
                            }
                        </div>
                        <p className="event__title">{item.title}</p>
                    </div>
                ))
            }
            
        </div>
    );
}

export default Event;