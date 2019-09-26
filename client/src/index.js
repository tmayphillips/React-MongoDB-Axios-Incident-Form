import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import ViewIncidents from './components/ViewIncidents'
import AddIncident from './components/AddIncident'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path = "/" exact component={ViewIncidents} />
        <Route path = "/add-incident" exact component={AddIncident} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>


  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
