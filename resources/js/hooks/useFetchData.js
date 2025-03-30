import { useQuery } from "@tanstack/react-query";
import useAppUrl from "./useAppUrl";


const useFetchData = (queryKey, endpoint) => {
    const API_URL = useAppUrl();
    const fullUrl = `${API_URL}/api/${endpoint}`;

    const fetchData = async () => {
        const response = await fetch(fullUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    };

    return useQuery({
        queryKey,
        queryFn: fetchData,
    });
};

export default useFetchData;
