import { useEffect, useState, useRef } from 'react';

const useGitConnected = () => {
    const [gitConnected, setGitConnected] = useState('');
    const [isLoading, setIsloading] = useState(true);
    const isCancelled = useRef(false);

    if (typeof process.env.REACT_APP_CONNECTED_URL === 'undefined') {
      console.error("Invalid GitConnect URL")
    }
  
    useEffect(() => {
      const fetchData = async () => {
          setIsloading(true);
          await fetch(process.env.REACT_APP_CONNECTED_URL)
          .then(res => res.json())
          .then(data => {
            setGitConnected(data);
            sessionStorage.setItem('gitConnected', JSON.stringify(data));
          })
          .catch(err => console.error(err))
          .finally(() => setIsloading(false))
      }
      if (sessionStorage.getItem('gitConnected') !== null) {
        setGitConnected(JSON.parse(sessionStorage.getItem('gitConnected')));
        setIsloading(false);
      } else {
        fetchData();
      }
      return() => {isCancelled.current = true};
    }, [])
  
    return [gitConnected, isLoading];
}

export default useGitConnected;