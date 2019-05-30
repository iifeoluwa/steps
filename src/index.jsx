import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './components/App';
import Plan from "./components/Plan";
import Shipment from "./components/Shipment";

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Shipment} />
        <Route path="/profile" component={App} />
        <Route path="/plan" component={Plan} />
      </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));