import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAppUrl from "@/hooks/UseAppUrl";

const usePaginatedQuery = ({
    queryKey,
    endpoint,
    queryParams = {},
    options = {},
}) => {
    const API_URL = UseAppUrl();

    // State for pagination and filtering
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({
        column: "",
        direction: "asc",
    });

    // Fetch function (uses dynamic endpoint and query params)
    const fetchData = async ({ queryKey }) => {
        const [_key, page, query, sortColumn, sortDirection] = queryKey;
        const response = await axios.get(`${API_URL}/api/${endpoint}`, {
            params: {
                page,
                ...queryParams, // Additional query parameters if needed
                search: query, // Example search field
                sortColumn,
                sortDirection,
            },
        });
        return response.data;
    };

    // Use React Query for fetching data
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: [
            queryKey,
            currentPage,
            searchQuery,
            sortConfig.column,
            sortConfig.direction,
        ],
        queryFn: fetchData,
        keepPreviousData: true,
        ...options, // Additional query options if needed
    });

    return {
        data,
        error,
        isLoading,
        refetch,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
        sortConfig,
        setSortConfig,
        totalPages: data?.last_page ?? 1,
        totalEntries: data?.total ?? 0,
    };
};

export default usePaginatedQuery;
