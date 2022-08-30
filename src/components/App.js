import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Navbar from './Navbar';
import Users from './Users';
import Search from './Search';
import Alert from './Alert';
import About from './About';
import axios from 'axios';
import UserDetails from './UserDetails';
import GithubState from '../context/githubState';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const getUserRepos = (username) => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then(response => { 
          setRepos(response.data); 
          setLoading(false) 
        })
    }, 1000)
  }

  const showAlert = (msg, type) => { //setAlert çakışması olmasın diye showAlert olarak değiştirildi.
    setAlert( {msg, type} );

    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  // <GithubState></GithubState>'i context provider olarak kullandık.
  return ( // Kapsayıcı elaman olarak boş yere <div> kullanmak yerine <React.Fragment> yada <Fragment> ya da <> kullanılır.
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/" render={ props => (
              <>
                <Search showAlert={showAlert} />
                <Users />
              </>
          )} />
          <Route path="/about" component={About} />
          <Route path="/user/:login" render={ props => ( // Buradaki props parametresi hem Route özelliğinden gelen propsları hem de bizim yazdığımız propsları kapsayıcıdır.   
            <UserDetails 
              {...props} // destructor
              getUserRepos = {getUserRepos}
              repos={repos} />
          )} />
        </Switch>
      </BrowserRouter>
    </GithubState>
  )
  }

// UserDetails componenti çalışma mantığı:
// User componenti içerisindeki Go Profile butonunun to linki ile UserDetails'in bağlı olduğu Route'un path linki arasında login parametresi sayesinde bir bağ oluşturulur.
// Kullanıcı User componenti içerisindeki Go Profile butonuna bastığında ilgili Link içerisindeki to attribute'üne bağlı linkte yer alan login bilgisi, ilgili Route'un props bilgileri içerisindeki match.params altına girer. UserDetails'in altında olduğu Route aktif olduğu için UserDetails komponenti sayfada oluşturulur.
// Bu Route altında yani UserDetails ile aynı seviyede başka bir komponent varsa ilgili Route aktif olduğu için o komponent de çalışır.

export default App