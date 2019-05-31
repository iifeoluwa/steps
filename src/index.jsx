import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import Plan from "./components/Plan";
import Shipment from "./components/Shipment";
import 'semantic-ui-css/semantic.min.css';
import "./index.css";

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