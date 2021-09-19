import {CountryType} from "../types";
import {FunctionComponent} from "react";

interface ICountryProps {
    country: CountryType
}

const Country: FunctionComponent<ICountryProps> =
    (props) => {
        const {country} = props;
        return (<p>{country.name} - {country.capital}</p>);
    }

export default Country;
