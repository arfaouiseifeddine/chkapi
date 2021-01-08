import axios from 'axios'
import React, { useEffect, useState } from 'react'


function UserList() {
const [users,setUsers] = useState ([])
useEffect (()=>{
    const fetchData =()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }
    fetchData()
}, [])
    

    return (
        <div>
        {users.map((user,i)=><h1>{user.name} </h1>)}
        
        </div>
    )
    
}
export default UserList;