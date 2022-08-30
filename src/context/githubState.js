import React, { useReducer } from "react"
import githubReducer from "./githubReducer"
import GithubContext from "./githubContext"
import axios from 'axios'

const GithubState = (props) => {
    console.log(props.children);
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    // Burada bir state ve dispatch oluşturuyoruz. State'in ilk değerleri initialState içerisinde tanımladığımız değerler olarak atıyoruz. Reducer'dan gelecek olan metodları da dispatch olarak tanımlıyoruz.
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUsers = (keyword) => {
        setLoading()
        setTimeout(() => {
          axios
          .get(`https://api.github.com/search/users?q=${keyword}`)
          .then(response => {
            dispatch({
                type: 'SEARCH_USERS', 
                payload: response.data.items
            }) // Dispatch içerisinde object gönderilen bir yapıya sahiptir.
            //SEARCH_USERS case'inde loading zaten false edildiği için burada loading'i false etmeye gerek kalmadı.
          });
        }, 1000)
      }

    const setLoading = () => {
        dispatch({type: 'SET_LOADING'});
    }

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers
        }}>
            {props.children} {/*Buradaki props.children App.js'deki <GithubState> kapsayıcısının altındaki componentleri ifade ediyor. Normalde App.js içerisinde kapsayıcı olarak <GithubContext.Provider> kullanılsa buna gerek yok. Ama App.js içerisinde kapsayıcı olarak <GithubState> kullandığımız için <GithubState> altındaki componentlerin <GithubContext.Provider> ile ilişkilendirilmesi gerekiyor. */}
    </ GithubContext.Provider>

}

export default GithubState

// Özetle burada yani Reducer ve Context yapıları sayesinde yaptığımız; state bilgilerinin ve state bilgilerini değiştirecek olan metodların tek bir noktadan bütün componentler tarafından ulaşılabilir olmasını sağlamaktır.