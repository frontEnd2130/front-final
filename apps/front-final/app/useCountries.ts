import { useEffect, useState } from "react";
import { request, gql } from 'graphql-request'



const apiKey = "";//we need an api key here....
export const testApi= async () => {
   try {
        console.log("****TESTING API****");
       // console.log(process.env.REACT_APP_API_KEY);
        const response = await fetch(`https://app.sportdataapi.com/api/v1/soccer/countries/?apikey=${apiKey}`, {
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
        testApi()
        .then((response)=> {
            console.log(response.data[0]);
            setCountries(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    
    return [ countries ];
}

export default useCountries;