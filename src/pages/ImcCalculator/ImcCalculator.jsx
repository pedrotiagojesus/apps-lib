import { useState } from "react";

// CSS
import "./ImcCalculator.css";

// Data
import imcData from "../../data/ImcCalculator.js";

// Components
import Calculator from "../../components/ImcCalculator/Calculator";
import Table from "../../components/ImcCalculator/Table";
import Card from "../../components/Card";

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

    const body = (
        <>
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
        </>
    );

    return (
        <div id="imc-calculator">
            <Card title="IMC Calculator" body={body} />
        </div>
    );
};

export default ImcCalculator;
