import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
    render() {
        const {login, id, avatar_url, html_url} = this.props.user; // destructor
        
        return (
            <div className="col-md-4 col-sm-6 col-lg-3">
                <div className="card mt-2">
                    <img src={avatar_url} alt="" className="img-fluid"/>
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <Link to={`/user/${login}`} className='btn btn-outline-danger btn-sm'>Go Profile</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default User