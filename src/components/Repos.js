import React, { useContext } from 'react';
import Repo from './Repo';
import GithubContext from '../context/github/githubContext';

const Repos = () => { //destructor

  const {repos} = useContext(GithubContext);

  return repos.map(repo => <Repo repo={repo} key={repo.id} />)
}

export default Repos