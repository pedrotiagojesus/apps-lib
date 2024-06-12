import { useState } from "react";
import axios from "axios";

// CSS
import "./ApiTranslate.css";
import Loading from "../../components/Loading/Loading";

import languageList from "./Data";

const ApiTranslate = () => {
    const [loading, setLoading] = useState(false);

    const [languageOriginalText, setLanguageOriginalText] = useState("PT");
    const [languageTranlatedText, setLanguageTranlatedText] = useState("EN");

    const [originalText, setOriginalText] = useState("Olá");
    const [translatedText, setTranslatedText] = useState("");

    const handleClick = async () => {
        setLoading(true);
        const url = "https://google-api31.p.rapidapi.com/gtranslate";

        const config = {
            headers: {
                "x-rapidapi-key":
                    "52f60a1141msh61637c05d4a2c44p173419jsnaef9250f4179",
                "x-rapidapi-host": "google-api31.p.rapidapi.com",
                "Content-Type": "application/json",
            },
        };

        const data = JSON.stringify({
            text: originalText,
            to: languageTranlatedText,
            from_lang: languageTranlatedText,
        });

        const response = await axios.post(url, data, config);
        const dataResponse = response.data;

        setTranslatedText(dataResponse.translated_text);
        setLoading(false);
    };

    return (
        <div id="api-translate">
            <div className="card">
                <div className="card-header">
                    <span>API translate</span>
                </div>

                <div className="card-body">
                    {loading && <Loading />}
                    <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <label
                                htmlFor="original-text"
                                className="form-label mb-0"
                            >
                                Text to translate
                            </label>
                            <select
                                className="form-select w-auto mb-3"
                                aria-label="Select the original language of the text"
                                value={languageOriginalText}
                                onChange={(e) =>
                                    setLanguageOriginalText(e.target.value)
                                }
                            >
                                {languageList.map((language) => (
                                    <option
                                        key={language.iso3}
                                        value={language.iso3}
                                    >
                                        {language.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <textarea
                            className="form-control"
                            id="original-text"
                            rows="8"
                            value={originalText}
                            onInput={(e) => setOriginalText(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-primary"
                            onClick={() => handleClick()}
                        >
                            Translate
                        </button>
                    </div>

                    <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <label
                                htmlFor="translated-text"
                                className="form-label mb-0"
                            >
                                Text translated
                            </label>
                            <select
                                className="form-select w-auto mb-3"
                                aria-label="Select the translated language of the text"
                                value={languageTranlatedText}
                                onChange={(e) =>
                                    setLanguageTranlatedText(e.target.value)
                                }
                            >
                                {languageList.map((language) => (
                                    <option
                                        key={language.iso3}
                                        value={language.iso3}
                                    >
                                        {language.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <textarea
                            className="form-control"
                            id="text-to-translate"
                            rows="8"
                            value={translatedText}
                            readOnly
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApiTranslate;
