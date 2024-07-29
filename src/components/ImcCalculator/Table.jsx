import React from "react";

const Table = ({ data, imc, info, infoClass, resetCalc }) => {
    return (
        <div id="result-container">
            <p id="imc-number">
                Seu IMC: <span className={infoClass}>{imc}</span> -{" "}
                <span className={infoClass}>{info}</span>
            </p>
            <h3>Confira as classificações</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                        <th>Obesidade</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.info}>
                            <td>{item.classification}</td>
                            <td>{item.info}</td>
                            <td>{item.obesity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="btn btn-danger" onClick={(e) => resetCalc(e)}>
                Go back
            </button>
        </div>
    );
};

export default Table;
