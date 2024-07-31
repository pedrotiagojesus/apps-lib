import { useState, useRef, useEffect } from "react";

// CSS
import "./BorderRadiusPreviewer.css";

// Components
import Card from "../../components/Card";
import Input from "../../components/BorderRadiusPreviewer/Input";
import CodeResult from "../../components/BorderRadiusPreviewer/CodeResult";

const BorderRadiusPreviewer = () => {
    const [borderTopLeft, setBorderTopLeft] = useState(0);
    const [borderBottomLeft, setBorderBottomLeft] = useState(0);
    const [borderTopRight, setBorderTopRight] = useState(0);
    const [borderBottomRight, setBorderBottomRight] = useState(0);

    const previewRef = useRef("");

    const [borderRadius, setBorderRadius] = useState("");

    useEffect(() => {
        if (borderTopLeft === "" || isNaN(borderTopLeft)) {
            setBorderTopLeft(0);
        }
        if (borderBottomLeft === "" || isNaN(borderBottomLeft)) {
            setBorderBottomLeft(0);
        }
        if (borderTopRight === "" || isNaN(borderTopRight)) {
            setBorderTopRight(0);
        }
        if (borderBottomRight === "" || isNaN(borderBottomRight)) {
            setBorderBottomRight(0);
        }

        let radius = `${borderTopLeft}px ${borderTopRight}px ${borderBottomRight}px ${borderBottomLeft}px `;

        setBorderRadius(radius);

        previewRef.current.style.borderRadius = radius;
    }, [borderTopLeft, borderBottomLeft, borderTopRight, borderBottomRight]);

    const body = (
        <>
            <div className="border-radius-wrapper">
                <div className="d-flex flex-column justify-content-between">
                    <Input
                        value={borderTopLeft}
                        onInputValue={setBorderTopLeft}
                    />
                    <Input
                        value={borderBottomLeft}
                        onInputValue={setBorderBottomLeft}
                    />
                </div>
                <div
                    id="preview"
                    className="ratio ratio-1x1"
                    ref={previewRef}
                ></div>
                <div className="d-flex flex-column justify-content-between">
                    <Input
                        value={borderTopRight}
                        onInputValue={setBorderTopRight}
                    />
                    <Input
                        value={borderBottomRight}
                        onInputValue={setBorderBottomRight}
                    />
                </div>
            </div>
            <CodeResult borderRadius={borderRadius} />
        </>
    );

    return (
        <div id="border-radius">
            <Card title="Border-radius Previewer" body={body} />
        </div>
    );
};

export default BorderRadiusPreviewer;
