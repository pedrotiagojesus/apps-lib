import { useEffect, useRef, useState } from "react";

// CSS
import "./Map.css";

// Hooks
import { useGeolocation } from "../../hooks/useGeolocation";

const Map = ({ lat, setLat, lng, setLng }) => {
    const modalRef = useRef();
    let mapInstance = null;

    const [newLat, setNewLat] = useState(null);
    const [newLng, setNewLng] = useState(null);

    let marker = null;

    const { currentPosition } = useGeolocation();

    useEffect(() => {
        const modalElement = modalRef.current;

        modalElement.addEventListener("shown.bs.modal", async (event) => {
            if (!lat && !lng) {
                const coordenates = await currentPosition();

                lat = coordenates.lat;
                lng = coordenates.lng;
            }

            const option = {};
            mapInstance = L.map("map", option).setView([lat, lng], 10);

            const mapUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
            const matAttr =
                "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>";

            L.tileLayer(mapUrl, {
                attribution: matAttr,
            }).addTo(mapInstance);

            if (lat && lng) {
                marker = L.marker([lat, lng]).addTo(mapInstance);
            }

            mapInstance.on("click", (e) => {
                setNewLat(e.latlng.lat);
                setNewLng(e.latlng.lng);

                if (marker !== null) {
                    mapInstance.removeLayer(marker);
                }

                marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(
                    mapInstance
                );
            });
        });

        modalElement.addEventListener("hide.bs.modal", (event) => {
            mapInstance.remove();
        });
    }, []);

    const onClickSelect = () => {
        setLat(newLat);
        setLng(newLng);
    };

    return (
        <div
            className="modal fade"
            id="weather-map"
            tabIndex="-1"
            data-bs-backdrop="static"
            ref={modalRef}
        >
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div id="map" className="ratio ratio-16x9"></div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            data-bs-dismiss="modal"
                            onClick={() => onClickSelect()}
                        >
                            Select
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;
