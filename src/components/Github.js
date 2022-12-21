import React, { useState, useEffect } from 'react';

import tokenKey from './token.json';
const token = tokenKey.token;

function Github() {
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        async function getRepos() {
            const response = await fetch('https://api.github.com/user/repos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const repos = await response.json();
            setRepos(repos);
        }

        getRepos();
    }, []);

    const filteredRepos = repos.filter(repo =>
        repo.visibility == "public"
    );
    const [loadMore, setloadMore] = useState(3)

    const load = ()=> {setloadMore(prevVal => {
        if (prevVal >= filteredRepos.length ) {
            return prevVal = 3
        } else { 
            return prevVal + 3
        }
    })}

console.log(filteredRepos)


    return (
        <div className='box-list' >
            {
            filteredRepos.slice(0,loadMore).map(repo => (
                <a data-aos="fade-up" href={repo.html_url} target="_blank" rel="noopener noreferrer" className='main-box-project' key={repo.id}>
                    <div className='link-project'>
                        <a class="fa-solid fa-folder-open"></a>
                        <small>Last Updated At : {repo.pushed_at.slice(0,10)}</small>
                    </div>
                    <div>
                        <h4 key={repo.id}>{repo.name}</h4>
                       
                    </div>
                    <div className='tools-used'><b>{repo.language}</b>
                    </div>
                </a>
            ))}
            <div className='btn-more'><button onClick={load}>{loadMore >= filteredRepos.length? "See Less": "See More"}</button></div>
        </div>
    );
}

export default Github;




