import React, { Component, Fragment } from 'react'
import Loading from './Loading';

class UserDetails extends Component {   
    componentDidMount() {
        // console.log(this.props);
        this.props.getUser(this.props.match.params.login);
        console.log(this.props.user);
    }

    render() {
        const {loading} = this.props; // destructer
        const {name, avatar_url, location, html_url, bio, blog, followers, following, public_repos} = this.props.user; //destructer

        if (loading) return <Loading />

        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={avatar_url} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">{name}</p>
                                <p><i className="fas fa-map-marker-alt"></i> {location}</p>
                                <p>
                                    <a className="btn btn-block btn-outline-info btn-sm" href={html_url}><i className="fab fa-github"></i> Github Profile</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                { // Aşağıda sol taraf true ise sağ taraf çalışır yani bio içeriği varsa Fragment içindekiler çalışır.
                                    bio &&
                                            <Fragment>
                                                <h3>About <b>{name}</b></h3>
                                                <p>{bio}</p>
                                            </ Fragment>
                                }
                                {
                                    blog &&
                                            <>
                                                <h3>Blog</h3>
                                                <p>{blog}</p>
                                            </>
                                }
                                <div>
                                    <span className="badge badge-success m-1">Follower: {followers}</span>
                                    <span className="badge badge-warning m-1">Following: {following}</span>
                                    <span className="badge badge-secondary m-1">Repos: {public_repos}</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails