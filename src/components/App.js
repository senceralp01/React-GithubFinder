import React, { Component, Fragment } from 'react'
import Navbar from './Navbar';
import User from './User';
import Users from './Users';

export class App extends Component {
  render() {
    return ( // Kapsayıcı elaman olarak boş yere <div> kullanmak yerine <React.Fragment> yada <Fragment> ya da <> kullanılır.
        <>
          <Navbar />
          <Users />
        </>
    )
  }
}

export default App