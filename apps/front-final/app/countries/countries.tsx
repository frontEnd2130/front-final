import './countries.module.css';
import {useCountries,testApi} from '../useCountries'

/* eslint-disable-next-line */
export interface CountriesProps {}

export function Countries(props: CountriesProps) {
 const [countries] = useCountries();
  //const countries =[];
  //console.log(process.env.REACT_APP_API_KEY);
 /* testApi().then((res)=>{
    console.log(res.data)
  });*/
  return (
    <div>
      <h1>Welcome to Countries!</h1>
      {
        countries && countries.length > 0 
        ?
        countries.map(({country_id, name,country_code}) =>  country_code && <li key={country_id}>{country_id} - {name}</li>)
        :
        <p>no data</p>
      }
    </div>
  );
}

export default Countries;
