import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countriesData from '../countries.json';

class CountryDetails extends Component {
    render() {
        const countryID = this.props.match.params.countryCode
        const country = countriesData.find(country => country.cca3 === countryID);

        return(
            <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        { country.borders.map((border, index) => {
                            return (
                                <li key={index}>
                                    <Link to={border}>{border}</Link>
                                </li>
                            )
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}

export default CountryDetails;