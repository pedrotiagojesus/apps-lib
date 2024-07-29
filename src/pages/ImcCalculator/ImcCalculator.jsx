import { useState } from "react";

// CSS
import "./ImcCalculator.css";

// Data
import imcData from "../../data/ImcCalculator.js";

// Components
import Calculator from "../../components/ImcCalculator/Calculator";
import Table from "../../components/ImcCalculator/Table";

const ImcCalculator = () => {
    const [imc, setImc] = useState("");
    const [info, setInfo] = useState("");
    const [infoClass, setInfoClass] = useState("");

    const calculateImc = (e, weight, height) => {
        e.preventDefault();

        const weightFloat = +weight.replace(",", ".");
        const heightFloat = +height.replace(",", ".");

        const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(
            1
        );

        setImc(imcResult);

        imcData.forEach((item) => {
            if (imcResult >= item.min && imcResult <= item.max) {
                setInfo(item.info);
                setInfoClass(item.infoClass);
            }
        });

        if (!info) {
            return;
        }
    };

    const resetCalc = (e) => {
        e.preventDefault();

        setImc("");
        setInfo("");
        setInfoClass("");
    };

    return (
        <div id="imc-calculator">
            <div className="card">
                <div className="card-header">
                    <span>IMC Calculator</span>
                </div>
                <div className="card-body">
                    {imc ? (
                        <Table
                            data={imcData}
                            imc={imc}
                            info={info}
                            infoClass={infoClass}
                            resetCalc={resetCalc}
                        />
                    ) : (
                        <Calculator calculateImc={calculateImc} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImcCalculator;
