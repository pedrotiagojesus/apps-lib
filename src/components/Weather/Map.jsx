import { useEffect, useRef, useState } from "react";

// CSS
import "./Map.css";

import markerIcon from "../../../node_modules/leaflet/dist/images/marker-icon.png";
import markerShadow from "../../../node_modules/leaflet/dist/images/marker-shadow.png";

const Map = ({ lat, setLat, lng, setLng }) => {
    const modalRef = useRef();
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markerRef = useRef(null);

    const [newLat, setNewLat] = useState(null);
    const [newLng, setNewLng] = useState(null);

    let DefaultIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [24, 36],
        iconAnchor: [12, 36],
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    useEffect(() => {
        if (mapInstanceRef.current) {
            return;
        }

        const option = {};
        mapInstanceRef.current = L.map(mapRef.current, option).setView(
            [lat, lng],
            10
        );

        const mapUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
        const matAttr =
            "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>";

        L.tileLayer(mapUrl, {
            attribution: matAttr,
        }).addTo(mapInstanceRef.current);
    }, []);

    useEffect(() => {
        const modalElement = modalRef.current;

        if (!modalElement) {
            return;
        }

        const handleModalShow = () => {
            mapInstanceRef.current.setView([lat, lng], 10);
        };

        const handleModalShown = () => {
            mapInstanceRef.current.invalidateSize();

            mapInstanceRef.current.setView([lat, lng], 10);

            if (lat && lng) {
                markerRef.current = L.marker([lat, lng]).addTo(
                    mapInstanceRef.current
                );
            }

            mapInstanceRef.current.on("click", (e) => {
                setNewLat(e.latlng.lat);
                setNewLng(e.latlng.lng);

                if (markerRef.current !== null) {
                    mapInstanceRef.current.removeLayer(markerRef.current);
                }

                markerRef.current = L.marker([
                    e.latlng.lat,
                    e.latlng.lng,
                ]).addTo(mapInstanceRef.current);
            });
        };

        const handleModalHidden = () => {
            if (markerRef.current) {
                markerRef.current.remove();
                markerRef.current = null;
            }
        };

        modalElement.addEventListener("show.bs.modal", handleModalShow);
        modalElement.addEventListener("shown.bs.modal", handleModalShown);
        modalElement.addEventListener("hidden.bs.modal", handleModalHidden);

        return () => {
            modalElement.removeEventListener("show.bs.modal", handleModalShow);
            modalElement.removeEventListener(
                "shown.bs.modal",
                handleModalShown
            );
            modalElement.removeEventListener(
                "hidden.bs.modal",
                handleModalHidden
            );
        };
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
