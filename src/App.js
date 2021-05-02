import React from 'react';
import './App.css';

import { 
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import DanceabilityVsPopularity from './components/DanceabilityVsPopularity.component';
import TempoVsPopularity from './components/TempoVsPopularity.component';
import LoudnessVsPopularity from './components/LoudnessVsPopularity.component';
import KeyVsPopularity from './components/KeyVsPopularity.component';
import AcousticnessVsPopularity from './components/AcousticnessVsPopularity.component';
import AdvancedAnalytics from './AdvancedAnalytics/AdvancedAnalytics'

const App = () => {

    return (
        <Router>
            <Menu/>
            <Hero/>
            <div className = "mainContainer">
                <Switch>
                <Route path="/dance" component={DanceabilityVsPopularity}/>
                <Route path="/tempo" component={TempoVsPopularity}/>
                <Route path="/loudness" component={LoudnessVsPopularity}/>
                <Route path="/key" component={KeyVsPopularity}/>
                <Route path="/acousticness" component={AcousticnessVsPopularity}/>
                <Route path="/advanced" component={AdvancedAnalytics}/>
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
