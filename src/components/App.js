import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Home from './Home';
import Alert from './Alert';
import About from './About';
import UserDetails from './UserDetails';
import GithubState from '../context/github/githubState';
import AlertState from '../context/alert/alertState';

const App = () => {

  // <GithubState></GithubState>'i context provider olarak kullandık.
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={UserDetails} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState >
  )
}

// UserDetails componenti çalışma mantığı:
// User componenti içerisindeki Go Profile butonunun to linki ile UserDetails'in bağlı olduğu Route'un path linki arasında login parametresi sayesinde bir bağ oluşturulur.
// Kullanıcı User componenti içerisindeki Go Profile butonuna bastığında ilgili Link içerisindeki to attribute'üne bağlı linkte yer alan login bilgisi, ilgili Route'un props bilgileri içerisindeki match.params altına girer. UserDetails'in altında olduğu Route aktif olduğu için UserDetails komponenti sayfada oluşturulur.
// Bu Route altında yani UserDetails ile aynı seviyede başka bir komponent varsa ilgili Route aktif olduğu için o komponent de çalışır.

// Edit: UserDetails'in olduğu Route içerisinden, context yapısından dolayı artık diğer propsların gönderilmesine gerek olmadığı için rendermetodunu kaldırdık. Direkt component olarak gönderdik. Bu şekilde component bilgisi içerisinde zaten props parametresi route bilgisi olarak zaten aktarılır. Sadece route için render yazmaya gerek yoktur.
export default App