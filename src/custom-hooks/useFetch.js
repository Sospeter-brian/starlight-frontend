import {useState, useEffect} from 'react'

const useFetch = (url) => {

   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {

       const getDonorsData = async () => {
        const response = await fetch('https://starlight-foundation.herokuapp.com/donors')
        const data = await response.json()
        setData(data)
       setLoading(false);
       }
       getDonorsData()
    }, [])
    return { data, loading } 
}

export default useFetch

