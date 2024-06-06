import { useEffect, useState } from "react";
import "./HelloMap.css";
import countryList from "./Data";

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

    return (
        <div id="hello-app">
            <div className="card">
                <div className="card-header">
                    <span>Hello APP</span>
                </div>

                <div className="card-body">
                    <div id="map"></div>
                </div>
            </div>
        </div>
    );
};

export default HelloMap;
