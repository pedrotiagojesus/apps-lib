import { useEffect, useRef } from "react";

const Toast = ({ title, message, status, onClose }) => {
    const toastRef = useRef();

    useEffect(() => {
        const toastElement = toastRef.current;

        const toastInstance = new window.bootstrap.Toast(toastElement, {
            delay: 5000,
        });

        toastElement.addEventListener("hidden.bs.toast", onClose);
        toastInstance.show();

        return () => {
            toastElement.removeEventListener("hidden.bs.toast", onClose);
        };
    }, [onClose]);

    let toastColor = "";

    switch (status) {
        case "danger":
        case "error":
            toastColor = "danger";
            break;

        default:
            toastColor = status;
            break;
    }

    return (
        <div className="toast show" ref={toastRef}>
            <div className="toast-header">
                <i className={`fa-solid fa-circle me-2 text-${toastColor}`}></i>
                <strong className="me-auto">{title}</strong>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                ></button>
            </div>
            <div className="toast-body">{message}</div>
        </div>
    );
};

export default Toast;
