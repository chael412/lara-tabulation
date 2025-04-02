import { useMemo } from "react";

const useAppUrl = () => {
    // Define the URL constants for offline and online
    // const appUrl = "http://localhost:8000";
    const appUrl = "https://piton.chaelx.online";

    const API_URL = useMemo(() => {
        return appUrl;
    }, []);

    return API_URL;
};

export default useAppUrl;
