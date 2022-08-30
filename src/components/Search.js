import React, {useState, useContext} from 'react'
import GithubContext from '../context/githubContext';

const Search = ({setAlert}) => {

    const {searchUsers, clearResults, users} = useContext(GithubContext);
    
    const [keyword, setKeyword] = useState('');

    const onChange = (event) => {
        setKeyword(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(keyword === ''){
            setAlert('Please type a keyword.', 'danger');
        }else {
            searchUsers(keyword);
            setKeyword('');
        }
    }

    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" value={keyword} onChange={onChange} className="form-control" />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-warning">Search</button>
                    </div>
                </div>
            </form>
            { 
                users.length>0  && <button onClick={clearResults} className="btn btn-secondary btn-sm btn-block mt-2">Clear Results</button>
            }
        </div> // Yukarıdaki expression'da && operatöründen önceki taraf true ise sağ taraf çalışır. False ise sol taraf çalışmaz.
    )
}

export default Search