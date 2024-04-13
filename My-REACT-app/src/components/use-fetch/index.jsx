import { useState, useEffect } from "react";

export default function useFetch(url, options={}){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData(){

        setLoading(true);

        try {
            const response = await fetch(url, {...options});

            if(!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            setData(result);

            setLoading(false);
            setError(null);

        } catch (error) {

           setError(`Error!! ${error}`); 
           setLoading(false);
        }
    }

    useEffect(() => {

        fetchData();
    }, [url]);

    return {data, error, loading};
}