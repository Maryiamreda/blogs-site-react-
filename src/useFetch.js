import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null
        //     [
        //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        // ]
    );

    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(url).then(
                res => {
                    return res.json();
                }
            ).then(data => {
                setData(data);
                setIsPending(false);
            })
        }, 1000)


    }, [url]);//whenever the url changes it will render to get this data
    return { data, isPending }
}
export default useFetch;