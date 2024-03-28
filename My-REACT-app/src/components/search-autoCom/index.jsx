import { useEffect, useState } from "react";
import Suggestions from "./suggestions";
import './searchAuto.css';


export default function SearchAutoCom(){

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    function handleChange(e){

        const query = e.target.value.toLowerCase();
        setSearchParam(s=>s=query);

        if(query.length > 1){

            const filteredData = users && users.length
            ? users.filter(i => i.toLowerCase().indexOf(query) > -1)
            : []

            setFilteredUsers(f=>f=filteredData);
            
            if(filteredData && filteredData.length > 0){
                setShowDropDown(true);
            }
        }
        else{

            setShowDropDown(false);
        }
    }

    function handleClick(e){

        ////console.log(e.target.innerText)
        setShowDropDown(false);
        setSearchParam(s=>s=e.target.innerText);
        setFilteredUsers([]);

    }

    async function fetchUsers(){

        try {
            setLoading(true);
            const res = await fetch('https://dummyjson.com/users');
            const data = await res.json();

            if(data && data.users && data.users.length){
                setLoading(false);
                setUsers(data.users.map(item => item.firstName));  
            }

        } catch (error) {
            console.log(error)
            setLoading(false);
            setError(error);
        }
    }

    useEffect(()=>{
        fetchUsers();
    }, []);

    return <div className="serach-ac-container">

        {   
            loading
            ? <p>Loading data...</p>
            : <input type="text" name="search-user" placeholder="Search users here" value={searchParam} onChange={handleChange} />
        }

        {
            showDropDown && <Suggestions filteredUsers={filteredUsers} handleClick={handleClick} />
        }

    </div>
}