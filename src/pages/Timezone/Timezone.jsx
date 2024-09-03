import { useEffect, useState } from "react";
import Select from "react-select";

// CSS
import "./Timezone.css";

// Data
import timezoneList from "../../data/Timezone";

// Components
import Card from "../../components/Card";
import TimezoneClock from "../../components/Timezone/TimezoneClock";

// Hooks
import { useCurrentModule } from "../../hooks/useCurrentModule";
import documentTitle from "../../hooks/useDocumentTitle";

const Timezone = () => {
    const { name: moduleName, slug: moduleSlug } = useCurrentModule();
    documentTitle(moduleName);

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

    const body = (
        <>
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
        </>
    );

    return (
        <div id={moduleSlug}>
            <Card title={moduleName} body={body} />
        </div>
    );
};

export default Timezone;
