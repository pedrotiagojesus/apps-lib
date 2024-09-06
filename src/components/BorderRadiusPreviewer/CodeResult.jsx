import React from "react";

// Context
import { useToast } from "../../context/ToastContext";

const CodeResult = ({ borderRadius }) => {
    const { addToast } = useToast();

    const handleCopy = (e) => {
        e.preventDefault();

        if (borderRadius === "") {
            return;
        }

        navigator.clipboard.writeText(`border-radius: ${borderRadius}`);
        addToast({
            title: "Border Radius Previewer",
            message: "Source code copied!",
            status: "success",
        });
    };

    return (
        <div id="display-code">
            <pre>border-radius: {borderRadius}</pre>
            <button
                className="btn btn-secondary"
                type="button"
                onClick={(e) => handleCopy(e)}
            >
                <i className="fa-solid fa-copy"></i>
            </button>
        </div>
    );
};

export default CodeResult;
