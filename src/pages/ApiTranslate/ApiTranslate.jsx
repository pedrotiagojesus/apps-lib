import { useEffect, useState } from "react";
import Select from "react-select";

// CSS
import "./ApiTranslate.css";

// Components
import Card from "../../components/Card";
import Loading from "../../components/Loading/Loading";

// Data
import languageList from "../../data/Language.js";

// Axios
import { translateFetch } from "../../axios/config";

const ApiTranslate = () => {
    const [loading, setLoading] = useState(false);

    // Language select box options
    const [langOptions, setLangOptions] = useState([]);

    useEffect(() => {
        languageList.map((lang) => {
            const opt = { value: lang.iso3, label: lang.name };
            setLangOptions((prevArray) => [...prevArray, opt]);
        });

        setLanguageOriginalText(languageList[6].iso2);
        setLanguageTranlatedText(languageList[0].iso2);
    }, [languageList]);

    const [languageOriginalText, setLanguageOriginalText] = useState("");
    const [languageTranlatedText, setLanguageTranlatedText] = useState("");
    const [originalText, setOriginalText] = useState("Olá");
    const [translatedText, setTranslatedText] = useState("");

    const handleClick = async () => {
        setLoading(true);

        const data = JSON.stringify({
            text: originalText,
            to: languageTranlatedText,
            from_lang: languageOriginalText,
        });

        const response = await translateFetch.post("", data);

        const dataResponse = response.data;

        setTranslatedText(dataResponse.translated_text);
        setLoading(false);
    };

    const body = (
        <>
            {loading && <Loading />}
            <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="original-text" className="form-label mb-0">
                        Text to translate
                    </label>
                    {langOptions && langOptions.length > 0 && (
                        <Select
                            className="select-theme mb-3"
                            onChange={(e) => setLanguageOriginalText(e.value)}
                            options={langOptions}
                            defaultValue={langOptions[6]}
                        />
                    )}
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
                    {langOptions && langOptions.length > 0 && (
                        <Select
                            className="select-theme mb-3"
                            onChange={(e) => setLanguageTranlatedText(e.value)}
                            options={langOptions}
                            defaultValue={langOptions[0]}
                        />
                    )}
                </div>
                <textarea
                    className="form-control"
                    id="text-to-translate"
                    rows="8"
                    value={translatedText}
                    readOnly
                ></textarea>
            </div>
        </>
    );

    return (
        <div id="api-translate">
            <Card title="API translate" body={body} />
        </div>
    );
};

export default ApiTranslate;
