import { useEffect, useRef, useState } from "react";

// CSS
import "./Map.css";

const Map = ({ lat, setLat, lng, setLng }) => {
    const modalRef = useRef();
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);

    let mapInstance = null;

    const [newLat, setNewLat] = useState(null);
    const [newLng, setNewLng] = useState(null);

    let marker = null;

    () => {};

    useEffect(() => {
        const modalElement = modalRef.current;

        if (!modalElement) {
            return;
        }

        modalElement.addEventListener("show.bs.modal", async (event) => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.panTo(new L.LatLng(lat, lng));

                /*
                var markers = L.markerClusterGroup();
                markers.clearLayers();
                */
            }
        });

        modalElement.addEventListener("shown.bs.modal", async (event) => {
            if (!mapRef.current) {
                return;
            }

            if (!mapInstanceRef.current) {
                const option = {};
                mapInstanceRef.current = L.map(mapRef.current, option).setView(
                    [lat, lng],
                    10
                );
            }

            const mapUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
            const matAttr =
                "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>";

            L.tileLayer(mapUrl, {
                attribution: matAttr,
            }).addTo(mapInstanceRef.current);

            if (lat && lng) {
                marker = L.marker([lat, lng]).addTo(mapInstanceRef.current);
            }

            mapInstanceRef.current.on("click", (e) => {
                setNewLat(e.latlng.lat);
                setNewLng(e.latlng.lng);

                if (marker !== null) {
                    mapInstanceRef.current.removeLayer(marker);
                }

                marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(
                    mapInstanceRef.current
                );
            });
        });

        modalElement.addEventListener("hidden.bs.modal", (event) => {
            if (mapInstanceRef.current) {
                var markers = L.markerClusterGroup();
                markers.clearLayers();

                // mapInstanceRef.current.remove();
                // mapInstanceRef.current = null;
            }
        });
    }, [lat, lng]);

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
                        <div ref={mapRef} className="ratio ratio-16x9"></div>
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
