import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <NavItem>
                                <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
