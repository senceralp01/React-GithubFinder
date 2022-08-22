import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props); // super olarak ilgili base'e props'u gönderdik.
        this.state = {
            id: '101891229',
            name: 'Sencer Alp Doğdu',
            username: 'senceralp01',
            avatar_url: "https://avatars.githubusercontent.com/u/101891229?v=4",
            html_url: "https://github.com/senceralp01",
            followers: 0,
            blog: "No blog"
        }

    }
    render() {
        const {name, username, avatar_url, html_url, followers, blog} = this.state;
        
        return (
            <div className="card m-2">
                <div className="row">
                    <div className="col-md-3">
                        <img src={avatar_url} alt="" className="card-img"/>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Followers: {followers}</p>
                            <p className="card-text">Blog: {blog}</p>
                            <a href={html_url} className='btn btn-primary btn-sm'>Go Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User