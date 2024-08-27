const Stats = ({ statArr }) => {
    return (
        <div id="stats">
            <h3>Stats</h3>
            <table className="table table-bordered table-sm">
                <tbody>
                    {statArr.map((entry, index) => (
                        <tr key={index} id={entry.stat.name}>
                            <td>
                                <span className="name">{entry.stat.name}</span>{" "}
                                {entry.base_stat}
                            </td>
                            <td className="cell-progress">
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: `calc(100% * ${entry.base_stat}/255)`,
                                        }}
                                    ></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Stats;
