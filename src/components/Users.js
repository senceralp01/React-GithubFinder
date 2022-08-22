import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    constructor(props) {
        super(props); // super olarak ilgili base'e props'u gönderdik.
        this.state = {
            users: [
                {
                    login: "technoweenie",
                    id: 21,
                    avatar_url: "https://avatars.githubusercontent.com/u/21?v=4",
                    html_url: "https://github.com/technoweenie"
                },
                {
                    login: "macournoyer",
                    id: 22,
                    avatar_url: "https://avatars.githubusercontent.com/u/22?v=4",
                    html_url: "https://github.com/macournoyer"
                },
                {
                    login: "takeo",
                    id: 23,
                    avatar_url: "https://avatars.githubusercontent.com/u/23?v=4",
                    html_url: "https://github.com/takeo"
                },
                {
                    login: "technoweenie",
                    id: 21,
                    avatar_url: "https://avatars.githubusercontent.com/u/21?v=4",
                    html_url: "https://github.com/technoweenie"
                },
                {
                    login: "macournoyer",
                    id: 22,
                    avatar_url: "https://avatars.githubusercontent.com/u/22?v=4",
                    html_url: "https://github.com/macournoyer"
                },
                {
                    login: "takeo",
                    id: 23,
                    avatar_url: "https://avatars.githubusercontent.com/u/23?v=4",
                    html_url: "https://github.com/takeo"
                }
            ]
        }
    }
    render() {
        return (
            <div className='container mt-3'>
                <div className="row">
                    {this.state.users.map(user => (
                        <User user={user} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Users