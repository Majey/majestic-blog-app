import { useState, useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    console.log(res);
                    if( !res.ok ){
                        throw Error("Could not fetch data for that resource");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setIsError(null);
                })
                .catch(err => {
                    setIsError(err.message);
                    setIsPending(false);
                });
        }, 1000);
    }, [url]);

    return {data, isPending, isError};
};

export default useFetch;