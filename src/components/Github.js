import { getAllByAltText } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

const token = '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';

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

    console.log(loadMore)


    const [languages, setLanguages] = useState({})
    useEffect(() => {
    filteredRepos.map(lang=> {
        fetch(lang.languages_url)
        .then(response => response.json())
        .then(languages =>  setLanguages(languages))
        .catch(error => console.error(error))
    })
    }, [])

    let languagesList =  Object.keys(languages)
    // console.log(languagesList)
    return (
        <div className='box-list' >
            {
            filteredRepos.slice(0,loadMore).map(repo => (
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='main-box-project' key={repo.id}>
                    <div className='link-project'>
                        <a class="fa-solid fa-folder-open"></a>
                        <small>{repo.created_at.slice(0,10)}</small>
                    </div>
                    <div>
                        <h4 key={repo.id}>{repo.name}</h4>
                        <p>A static website that you can see all the trending Movie, Tv series, anime. Built with HTML, CSS Bootstrap </p>
                    </div>
                    <div className='tools-used'>{    
                    languagesList.map(e => { 
                        return (<b>{e}</b>)
                    })}
                    </div>
                </a>
            ))}
            <div className='btn-more'><button onClick={load}>{loadMore >= filteredRepos.length? "See Less": "See More"}</button></div>
        </div>
    );
}

export default Github;




