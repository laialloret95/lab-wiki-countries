import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import countriesData from './countries.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        countries: countriesData,
        status: 'loading'
    }
  }

  componentDidMount = () => {
      this.setState({
        status: 'loaded'
      })
  }

  render() {
    const { countries, status } = this.state

    return (
      <div className="App">
        <Navbar />
        <div className="content-container"> 
          {status === 'loading' && <p>Loading...</p>}
          {status === 'loaded' && <CountriesList countries={countries} />}
          <Switch>
            <Route path="/:countryCode" component={CountryDetails}/>
          </Switch>
        </div>
  
      </div>
    );
  } 
}

export default App;
