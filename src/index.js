import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.scss';
import Login from './containers/login';
import Todos from './containers/todos';
import TodoForm from './containers/todo-form';
import Header from './components/header';
import {GlobalProvider} from './shared/global-provider';
import './assets/initial-data';

ReactDOM.render(
    <BrowserRouter>
        <div className="main-wrapper">
            <GlobalProvider>
                <Header/>
                <Route exact path='/' component={Login} />
                <Route exact path='/todos' component={Todos} />
                <Route exact path='/todo-form' component={TodoForm} />
                <Route exact path='/todo-form/:id' component={TodoForm} />
            </GlobalProvider>
        </div>
    </BrowserRouter>, 
    document.getElementById('root')
);

