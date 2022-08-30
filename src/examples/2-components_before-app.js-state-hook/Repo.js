import React from 'react'

const Repo = ({ repo }) => { //destructor
    return (
        <li className="list-group-item">
            <i className="fas fa-braille fa-spin"></i> <a href={repo.html_url}>{repo.name}</a>
        </li>
    )
}

export default Repo
