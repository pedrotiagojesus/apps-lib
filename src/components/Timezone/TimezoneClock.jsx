import { useState, useEffect } from "react";
import "./TimezoneClock.css";

const TimezoneClock = ({ timezone }) => {
    const [timeAnalog, setTimeAnalog] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();

            // display the date and time in PST timezone
            let options = {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZone: timezone,
            };

            const timeAnalogString = date.toLocaleString("en", {
                timeZone: timezone,
            });
            setTimeAnalog(new Date(timeAnalogString));

            const timeString = date.toLocaleTimeString("pt", options);
            setTime(timeString);
        }, 1000);
    }, [timezone]);

    return (
        <div className="col-lg-3">
            <div className="card timezone-card">
                <div className="card-header">{timezone}</div>
                <div className="card-body">
                    <div className="timezone-clock ratio">
                        {timeAnalog && (
                            <div className="clock-wrapper">
                                <div className="clock">
                                    <div className="hand_wrapper">
                                        <div
                                            className="hour_hand"
                                            style={{
                                                transform: `rotateZ(${
                                                    timeAnalog.getHours() * 30
                                                }deg)`,
                                            }}
                                        />
                                        <div
                                            className="min_hand"
                                            style={{
                                                transform: `rotateZ(${
                                                    timeAnalog.getMinutes() * 6
                                                }deg)`,
                                            }}
                                        />
                                        <div
                                            className="sec_hand"
                                            style={{
                                                transform: `rotateZ(${
                                                    timeAnalog.getSeconds() * 6
                                                }deg)`,
                                            }}
                                        />
                                    </div>
                                    <span className="twelve">12</span>
                                    <span className="one">1</span>
                                    <span className="two">2</span>
                                    <span className="three">3</span>
                                    <span className="four">4</span>
                                    <span className="five">5</span>
                                    <span className="six">6</span>
                                    <span className="seven">7</span>
                                    <span className="eight">8</span>
                                    <span className="nine">9</span>
                                    <span className="ten">10</span>
                                    <span className="eleven">11</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {time && <div className="card-footer">{time}</div>}
            </div>
        </div>
    );
};

export default TimezoneClock;
