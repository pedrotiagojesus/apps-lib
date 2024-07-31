import { useEffect, useState } from "react";
import Select from "react-select";

// CSS
import "./Timezone.css";

// Data
import timezoneList from "../../data/Timezone";

// Components
import TimezoneClock from "../../components/Timezone/TimezoneClock";

const Timezone = () => {
    const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [timezoneSelected, setTimezoneSelected] = useState([localTimezone]);

    const addTimezone = (e) => {
        const newTimezone = e.value;

        if (!timezoneSelected.includes(newTimezone)) {
            setTimezoneSelected([...timezoneSelected, newTimezone]);
        }
    };

    // Timezone select box options
    const [timezoneOptions, setTimezoneOptions] = useState([]);

    useEffect(() => {
        const opt = { value: "", label: "Selecione um fuso horário" };
        setTimezoneOptions((prevArray) => [...prevArray, opt]);

        timezoneList.map((timezone) => {
            const opt = { value: timezone, label: timezone };

            setTimezoneOptions((prevArray) => [...prevArray, opt]);
        });
    }, [timezoneList]);

    return (
        <div id="timezone">
            <div className="card">
                <div className="card-header">
                    <span>Timezone</span>
                </div>
                <div className="card-body">
                    {timezoneOptions && timezoneOptions.length > 0 && (
                        <Select
                            className="select-theme mb-3 w-100"
                            onChange={(e) => {
                                addTimezone(e);
                            }}
                            options={timezoneOptions}
                            defaultValue={timezoneOptions[0]}
                        />
                    )}
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
