import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const payload = { method: 'GET', url, body: null };

                const logEntry = {
                    payload,
                    responseStatus: response.status,
                    timestamp: new Date().toISOString(),
                };

                localStorage.setItem(
                    `log-${logEntry.timestamp}`,
                    JSON.stringify(logEntry)
                );

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
};

export default useFetch;