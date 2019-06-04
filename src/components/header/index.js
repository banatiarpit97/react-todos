import React from 'react';
import styles from './index.module.scss';
import {Link, withRouter} from 'react-router-dom';
import {logout} from './../../services/auth.js';
import {GlobalConsumer} from './../../shared/global-provider';


function Header(props) {

    function onLogout(changeStatus){
        if(logout()){
            changeStatus(false);
            props.history.push('/');
        }
    }
    
    return (
          <GlobalConsumer>
            {
                ({loggedIn, changeStatus}) => (
                    loggedIn && 
                        <header>
                            <div><h3>TODOS APP</h3></div>
                            <div className={styles.actions}>
                                <Link to='/todos'><span>View Todos</span></Link>
                                <Link to='/todo-form'><span>Add New</span></Link>
                                <span onClick={() => onLogout(changeStatus)}>Logout</span>
                            </div>  
                        </header>
                )
            }  
          </GlobalConsumer>
    );
}

export default withRouter(Header);