import { useEffect, useState } from "react";

// CSS
import "./HelloMap.css";

// Data
import countryList from "./Data";

// Components
import Card from "../../components/Card";

const HelloMap = () => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (!map) {
            const option = {
                dragging: false,
                zoomControl: false,
            };

            let m = L.map("map", option).setView([45, 0], 2);

            setMap(m);
        }
    }, []);

    useEffect(() => {
        const setMarker = async (country, hello) => {
            return new Promise(async (resolve, reject) => {
                setTimeout(async () => {
                    var marker = new L.popup()
                        .setLatLng([country.lat, country.lng])
                        .setContent(
                            `<div class="d-flex align-item-center"><span><img src="https://flagcdn.com/16x12/${country.iso2}.png" class="me-2"></span><span>${hello}</span></div>`
                        )
                        .addTo(map);

                    resolve();
                }, 2000);
            });
        };

        const getHello = async () => {
            for (const countryIndex in countryList) {
                let country = countryList[countryIndex];

                const response = await fetch(
                    "https://hellosalut.stefanbohacek.dev/?cc=" + country.iso2
                );
                const json = await response.json();
                await setMarker(country, json.hello);
            }
        };

        if (!map) {
            return;
        }

        const mapUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
        const matAttr =
            "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>";

        L.tileLayer(mapUrl, {
            attribution: matAttr,
        }).addTo(map);

        getHello();
    }, [map]);

    const body = <div id="map"></div>;

    return (
        <div id="hello-app">
            <Card title="Hello APP" body={body} />
        </div>
    );
};

export default HelloMap;
