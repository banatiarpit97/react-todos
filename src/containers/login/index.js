import React, { Component } from 'react';
import styles from './index.module.scss';
import {login} from './../../services/auth';
import {GlobalConsumer} from './../../shared/global-provider';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      credentials: {email: '', password: ''},
      error: false,
    }
  } 
  
  checkCredentials = (e, changeStatus) => {
    const {credentials} = this.state;
    e.preventDefault();
    if(login(credentials.email, credentials.password)){
      this.setState({error:false});
      changeStatus(true);
      this.props.history.push('/todos')
    }
    else{
      this.setState({error:true});
    }
  }

  render(){
    const {error, credentials} = this.state;
    return (
      <GlobalConsumer>
        {
          ({changeStatus}) => (
            <div className={styles.login}>
              <form onSubmit={(e) => this.checkCredentials(e, changeStatus)}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" value={credentials.email} onChange={(e) => this.setState({...this.state, credentials:{...this.state.credentials, email: e.target.value}})}/>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" value={credentials.password} onChange={(e) => this.setState({...this.state, credentials:{...this.state.credentials, password: e.target.value}})}/>
                </div>
                <div>
                  <input type="submit" value="Login" />
                </div>
              </form>
              {error && <p className="error">Email or password is incorrect</p>}
            </div>
          )
        }
          
      </GlobalConsumer>
    );
  }
  
}


export default App;
