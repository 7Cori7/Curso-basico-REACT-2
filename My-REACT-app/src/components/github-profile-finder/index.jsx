import { useEffect, useState } from 'react';
import './github-profile.css';
import UserCard from './user-card';

export default function GithubProfileFinder(){

    const [username, setUsername] = useState('7Cori7');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchGithubUser(){

        try{

            setLoading(l=>l=true);
            const res = await fetch(`http://api.github.com/users/${username}`);
            const data = await res.json();

            ////console.log(data)

            if(data){

                setTimeout(()=>{
                    setLoading(false);
                    setUserData(u=>u= data);
                    setUsername(u=>u='');
                },2000)
            }
            
        }catch(error){
            console.log(error)
        }
    }

    function handleSubmit(){
        fetchGithubUser();
    }

    useEffect(()=>{
        fetchGithubUser();
    },[]);

    return <div className='github-component-body'>

        <h1>Github Profile Finder</h1>

        <div className='github-profile-container'>

            <div className='input-wrapper'>

                <input type="text" name='search-by-user' placeholder='Search Github username' value={username} onChange={(e)=>setUsername(u=>u=e.target.value)} />

                <button onClick={handleSubmit}>Search</button>

            </div>

            { loading && <p style={{textAlign:'center'}}>⌛Loading...Please wait</p> }

            {
                userData !== null
                ? <UserCard user={userData} />
                :null
            }

        </div>

    </div>
}