import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null

        //     [
        //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        // ]

    );
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) { // error coming back from server
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        // auto catches network / connection error
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1000);

        // abort the fetch
        return () => abortCont.abort();
    }, [url])

    return { data, isPending, error };
}

export default useFetch;
