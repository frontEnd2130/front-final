import './countries.module.css';
import {useCountries} from '../useCountries'

/* eslint-disable-next-line */
export interface CountriesProps {}

export function Countries(props: CountriesProps) {
 const [countries] = useCountries();
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
