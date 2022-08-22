import React, { Component, Fragment } from 'react'
import Navbar from './Navbar';
import Users from './Users';
import Search from './Search';
import axios from 'axios';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: []
    }
  }

  componentDidMount() {
    this.setState({loading: true});
    setTimeout(() => {
      axios
      .get('https://api.github.com/users')
      .then(response => this.setState({
        users: response.data,
        loading: false
      }))
    }, 1000)
  }

  render() {
    return ( // Kapsayıcı elaman olarak boş yere <div> kullanmak yerine <React.Fragment> yada <Fragment> ya da <> kullanılır.
      <>
        <Navbar />
        <Search />
        <Users users={this.state.users} loading={this.state.loading} />
      </>
    )
  }
}

export default App