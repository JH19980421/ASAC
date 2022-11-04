import "../../css/toast/toast-alert.css";

function ToastAlert(props) {
    return (
        <div className="toast__container">
            <div className="toast__text">{props.toastMessage}</div>
        </div>
    )
}

export default ToastAlert;