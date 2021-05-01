import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import PrivateRoute from './components/private-route';

import { 
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import ChartPage from './components/charts.component';
import Loading from './components/Loading';

const App = () => {
    const { isLoading } = useAuth0();
    if (isLoading) {
        return <Loading/>
    }

    return (
        <Router>
            <Menu/>
            <Hero/>
            <div className = "mainContainer">
                <Switch>
                <PrivateRoute path="/charts" component={ChartPage}/>
                <Route path="/">
                    <HomePage/>
                </Route>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
