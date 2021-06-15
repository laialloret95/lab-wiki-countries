import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {

    render() {
        const countriesData = this.props.countries

        return(
            <div className="col-5 countries-container">
                <div className="list-group">
                    {countriesData.map((country, index) => {
                        return (
                            <div key={index}>
                                <Link className = "btn btn-link" to={country.cca3}> {country.flag} {country.name.common} </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CountriesList;