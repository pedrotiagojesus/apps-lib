import { useState, useRef, useEffect } from "react";
import "./BorderRadiusPreviewer.css";

const BorderRadiusPreviewer = () => {
    const [borderTopLeft, setBorderTopLeft] = useState(0);
    const [borderBottomLeft, setBorderBottomLeft] = useState(0);
    const [borderTopRight, setBorderTopRight] = useState(0);
    const [borderBottomRight, setBorderBottomRight] = useState(0);

    const previewRef = useRef("");

    const [borderRadius, setBorderRadius] = useState("");

    useEffect(() => {
        console.log(borderTopLeft);
        console.log(borderTopLeft === NaN);

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

    return (
        <div id="border-radius">
            <div className="card">
                <div className="card-header">
                    <span>Border-radius Previewer</span>
                </div>
                <div className="card-body">
                    <div className="border-radius-wrapper">
                        <div className="d-flex flex-column justify-content-between">
                            <input
                                type="text"
                                id="border-radius-top-left"
                                className="form-control"
                                value={borderTopLeft}
                                maxLength="3"
                                onInput={(e) =>
                                    setBorderTopLeft(parseFloat(e.target.value))
                                }
                            />
                            <input
                                type="text"
                                id="border-radius-bottom-left"
                                className="form-control"
                                value={borderBottomLeft}
                                maxLength="3"
                                onInput={(e) =>
                                    setBorderBottomLeft(
                                        parseFloat(e.target.value)
                                    )
                                }
                            />
                        </div>
                        <div
                            id="preview"
                            className="form-control"
                            ref={previewRef}
                        ></div>
                        <div className="d-flex flex-column justify-content-between">
                            <input
                                type="text"
                                id="border-radius-top-right"
                                className="form-control"
                                value={borderTopRight}
                                maxLength="3"
                                onInput={(e) =>
                                    setBorderTopRight(
                                        parseFloat(e.target.value)
                                    )
                                }
                            />
                            <input
                                type="text"
                                id="border-radius-bottom-right"
                                className="form-control"
                                value={borderBottomRight}
                                maxLength="3"
                                onInput={(e) =>
                                    setBorderBottomRight(
                                        parseFloat(e.target.value)
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div id="display-code">
                        <pre>border-radius: {borderRadius}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorderRadiusPreviewer;
