import React, { Component } from 'react'
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom';
import NewComponent from './NewComponent';

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={NewComponent} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}
