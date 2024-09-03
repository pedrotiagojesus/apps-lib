import { useEffect } from "react";

function documentTitle(title) {
    useEffect(() => {
        document.title = `${title} - APP Ideas`;
    }, [title]);
}
export default documentTitle;
