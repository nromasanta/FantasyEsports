import {useState, useEffect } from 'react';


// HOW TO USE: 
// Pass in url to fetch the data, it should return
// the data, loading status, and an error if necessary

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect( () => {
        fetch(url)
        .then(res => { 
          if(!res.ok) {
            throw Error('Failed to retrieve data');
          }
          return res.json();
        })
        .then (data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
      }, [url]);

      return { data, isPending, error }
}

export default useFetch;
 
