import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Leaflet
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";

// CSS
import "./index.css";
import "./root.css";
import "./theme/btn.css";

// Pages
import App from "./App.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import BorderRadiusPreviewer from "./pages/BorderRadiusPreviewer/BorderRadiusPreviewer.jsx";
import HelloMap from "./pages/HelloMap/HelloMap.jsx";
import CurrencyConverter from "./pages/CurrencyConverter/CurrencyConverter.jsx";
import Weather from "./pages/Weather/Weather.jsx";
import Timezone from "./pages/Timezone/Timezone.jsx";
import ApiTranslate from "./pages/ApiTranslate/ApiTranslate.jsx";
import NarcissisticNumber from "./pages/NarcissisticNumber/NarcissisticNumber.jsx";
import TicTacToe from "./pages/TicTacToe/TicTacToe.jsx";
import MemoryGame from "./pages/MemoryGame/MemoryGame.jsx";
import ImcCalculator from "./pages/ImcCalculator/ImcCalculator.jsx";
import RockPaperScissor from "./pages/RockPaperScissor/RockPaperScissor.jsx";
import Quiz from "./pages/Quiz/Quiz.jsx";

const router = createBrowserRouter([
    {
        path: "/apps-lib",
        element: <App />,
        children: [
            {
                path: "/apps-lib",
                element: <Homepage />,
            },
            {
                path: "/apps-lib/border-radius-previewer",
                element: <BorderRadiusPreviewer />,
            },
            {
                path: "/apps-lib/hello-map",
                element: <HelloMap />,
            },
            {
                path: "/apps-lib/currency-converter",
                element: <CurrencyConverter />,
            },
            {
                path: "/apps-lib/weather",
                element: <Weather />,
            },
            {
                path: "/apps-lib/timezone",
                element: <Timezone />,
            },
            {
                path: "/apps-lib/api-translate",
                element: <ApiTranslate />,
            },
            {
                path: "/apps-lib/narcissistic-number",
                element: <NarcissisticNumber />,
            },
            {
                path: "/apps-lib/tic-tac-toe",
                element: <TicTacToe />,
            },
            {
                path: "/apps-lib/memory-game",
                element: <MemoryGame />,
            },
            {
                path: "/apps-lib/imc-calculator",
                element: <ImcCalculator />,
            },
            {
                path: "/apps-lib/rock-paper-scissor",
                element: <RockPaperScissor />,
            },
            {
                path: "/apps-lib/quiz",
                element: <Quiz />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
