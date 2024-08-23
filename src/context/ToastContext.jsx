import React, { createContext, useState, useContext } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toastArr, setToastArr] = useState([]);

    const addToast = (toast) => {
        setToastArr([...toastArr, toast]);
    };

    const removeToast = (index) => {
        setToastArr(toastArr.filter((toast, i) => i !== index));
    };

    return (
        <ToastContext.Provider value={{ toastArr, addToast, removeToast }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
};
