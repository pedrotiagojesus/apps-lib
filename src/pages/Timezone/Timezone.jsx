import { useState } from "react";
import timezoneList from "./Data";
import "./Timezone.css";
import TimezoneClock from "../../components/Timezone/TimezoneClock";

const Timezone = () => {
    const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [timezoneSelected, setTimezoneSelected] = useState([localTimezone]);

    const addTimezone = (e) => {
        const newTimezone = e.target.value;

        if (!timezoneSelected.includes(newTimezone)) {
            setTimezoneSelected([...timezoneSelected, newTimezone]);
        }
    };

    return (
        <div id="timezone">
            <div className="card">
                <div className="card-header">
                    <span>Timezone</span>
                </div>
                <div className="card-body">
                    <select
                        className="form-select"
                        onChange={(e) => addTimezone(e)}
                    >
                        <option value="" disabled selected>
                            Selecione um fuso horário
                        </option>
                        {timezoneList.map((timezone) => (
                            <option key={timezone} value={timezone}>
                                {timezone}
                            </option>
                        ))}
                    </select>

                    <div className="row timezone-row">
                        {timezoneSelected.map((timezone) => (
                            <TimezoneClock key={timezone} timezone={timezone} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timezone;
