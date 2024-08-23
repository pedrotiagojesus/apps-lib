// CSS
import "./Toast.css";

// Component
import Toast from "./Toast";

// Context
import { useToast } from "../../context/ToastContext";

const ToastContainer = () => {
    const { toastArr, removeToast } = useToast();

    return (
        <div className="toast-container">
            {toastArr.map((toast, index) => (
                <Toast
                    key={index}
                    title={toast.title}
                    message={toast.message}
                    status={toast.status}
                    onClose={() => removeToast(index)}
                />
            ))}
        </div>
    );
};

export default ToastContainer;
