import { useState } from "react";

// CSS
import "./ShortUrl.css";

// Axios
import shortUrlFetch from "../../axios/shortUrl";

// Context
import { useToast } from "../../context/ToastContext";

// Components
import Card from "../../components/Card";
import Loading from "../../components/Loading/Loading";

// Hooks
import { useCurrentModule } from "../../hooks/useCurrentModule";

const ShortUrl = () => {
    const { name: moduleName, slug: moduleSlug } = useCurrentModule();

    const { addToast } = useToast();

    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleConvert = async () => {
        if (longUrl === "") {
            return;
        }

        const data = {
            url: longUrl,
        };

        try {
            setLoading(true);
            const response = await shortUrlFetch.post("/create", data);
            setShortUrl(response.data.data.tiny_url);
        } catch (error) {
            addToast({
                title: "Short URL",
                message: "Error when shortening link!",
                status: "error",
            });
            setShortUrl("");

            // console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = (e) => {
        e.preventDefault();

        if (shortUrl === "") {
            return;
        }

        navigator.clipboard.writeText(shortUrl);
        addToast({
            title: "Short URL",
            message: "Short URL copied!",
            status: "success",
        });
    };

    const body = (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="long-url" className="form-label">
                            URL to be shorter
                        </label>
                        <input
                            className="form-control"
                            id="long-url"
                            type="url"
                            value={longUrl}
                            onInput={(e) => setLongUrl(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => handleConvert()}
                    >
                        Shorten This Link
                    </button>
                    <div className="mb-3">
                        <label htmlFor="short-url" className="form-label">
                            URL shorted
                        </label>
                        <div className="input-group">
                            <input
                                className="form-control"
                                id="short-url"
                                type="url"
                                value={shortUrl}
                                onInput={(e) => setShortUrl(e.target.value)}
                                readOnly
                            />
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={(e) => handleCopy(e)}
                            >
                                <i className="fa-solid fa-copy"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div id={moduleSlug}>
            <Card title={moduleName} body={body} />
            {loading && <Loading />}
        </div>
    );
};

export default ShortUrl;
