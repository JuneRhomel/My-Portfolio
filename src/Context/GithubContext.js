import { useEffect,createContext,useState } from "react";

import tokenKey from '../token.json';
const token = tokenKey.token;

    const [repos, setRepos] = useState([]);
    const fetch = useEffect(() => {
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

const GithubContextApi = createContext(repos)
export default GithubContextApi