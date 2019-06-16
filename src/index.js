import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import './index.scss';
import Login from './containers/login';
import Todos from './containers/todos';
import TodoForm from './containers/todo-form';
import Header from './components/header';
import {GlobalProvider} from './shared/global-provider';
import history from './shared/history';
import './assets/initial-data';

ReactDOM.render(
    <Router history={history}>
        <div className="main-wrapper">
            <GlobalProvider>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/todos' component={Todos} />
                    <Route exact path='/todo-form' component={TodoForm} />
                    <Route exact path='/todo-form/:id' component={TodoForm} />
                    <Route path='**' component={Login} />
                </Switch>
            </GlobalProvider>
        </div>
    </Router>, 
    document.getElementById('root')
);

