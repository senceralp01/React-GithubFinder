import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Navbar from './Navbar';
import Users from './Users';
import Search from './Search';
import Alert from './Alert';
import About from './About';
import axios from 'axios';

export class App extends Component {

  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearResults = this.clearResults.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.state = {
      loading: false,
      users: [],
      alert: null
    }
  }

  searchUsers(keyword) {
    this.setState({loading: true});
    setTimeout(() => {
      axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then(response => this.setState({
        users: response.data.items,
        loading: false
      }))
    }, 1000)
  }

  clearResults() {
    this.setState({ users: [] })
  }

  setAlert(msg, type) {
    this.setState({ alert: {msg, type} });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000)
  }

  render() {
    return ( // Kapsayıcı elaman olarak boş yere <div> kullanmak yerine <React.Fragment> yada <Fragment> ya da <> kullanılır.
      <BrowserRouter>
        <Navbar />
        <Alert alert={this.state.alert} />
        <Switch>
          <Route exact path="/" render={ props => (
              <>
                <Search
                  searchUsers={this.searchUsers} 
                  clearResults={this.clearResults} 
                  showClearButton={this.state.users.length > 0? true:false} 
                  setAlert={this.setAlert}
                />
                <Users users={this.state.users} loading={this.state.loading} />
              </>
          )} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App