import React from "react";

const CodeResult = ({ borderRadius }) => {
    return (
        <div id="display-code">
            <pre>border-radius: {borderRadius}</pre>
        </div>
    );
};

export default CodeResult;
