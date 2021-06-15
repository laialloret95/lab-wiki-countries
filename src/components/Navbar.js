import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    
    render() {

        return(
                <nav className="navbar navbar-dark bg-primary mb-3">
                    <div className="container">
                        <Link className="navbar-brand" to="/">LAB | WikiCountries</Link>
                    </div>
                </nav>
        )
    }
}

export default Navbar;