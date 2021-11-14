import { useEffect, useState } from "react";



const apiKey = process.env.API_KEY;//we need an api key here....
export const getTeams= async (country_id:string) => {
   try {
        console.log("****TESTING API****");
        const request = `https://app.sportdataapi.com/api/v1/soccer/teams?apikey=${apiKey}&country_id=${country_id}`;//https://app.sportdataapi.com/api/v1/soccer/teams?apikey=API_KEY&country_id=country_id
        const response = await fetch(request, {
            method: "GET",
        });
        return response.json();
    } catch(err){
        return null;
    }
    
}; 




export const useTeams = (country_id:string) => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        getTeams(country_id)
        .then((response)=> {
            console.log(response);
            setTeams(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    
    return [ teams ];
}

export default useTeams;