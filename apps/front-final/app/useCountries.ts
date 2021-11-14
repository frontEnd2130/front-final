import { useEffect, useState } from "react";



const apiKey = process.env.API_KEY;//we need an api key here....
const getCountries= async () => {
   try {
        const request = `https://app.sportdataapi.com/api/v1/soccer/countries/?apikey=${apiKey}`;
        const response = await fetch(request, {
            method: "GET",
           
        });
        return response.json();
    } catch(err){
        return null;
    }
    
}; 




export const useCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        getCountries()
        .then((response)=> {
            setCountries(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    
    return [ countries ];
}

export default useCountries;