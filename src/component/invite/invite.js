import React, { useEffect, useState } from 'react';
import './index.css';
import { Success } from './Success';
import { Users } from './users';
// Тут список пользователей: https://reqres.in/api/users

function Invitation() {
    const [users,setUsers] = useState([]);
    const [invites, setInvites] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [success, setSuccess] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    useEffect(()=>{
        fetch('https://reqres.in/api/users')
        .then((res)=> res.json())
        .then((json)=>{
            setUsers(json.data)
        })
        .catch((err)=> {
            console.warn(err);
            alert('Error')
        })
        .finally(()=> setLoading(false))
    })

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }

    const onClickInvite = (id) => {
      if(invites.includes(id)){
        setInvites((prev) => prev.filter(_id => _id !== id))
      }else{
        setInvites((prev) => [...prev, id])
      }
    }

    const onClickSendInvites = () =>{
      setSuccess(true)
    }

  return (
    <div className="invitation">
      {
        success ? (
          <Success count={invites.length}/> 
        ) : (
          <Users 
            onChangeSearchValue={onChangeSearchValue} 
            invites={invites} 
            onClickInvite={onClickInvite} 
            searchValue={searchValue} 
            items={users} 
            isLoading={isLoading}
            onClickSendInvites={onClickSendInvites}/>
        )
      }
    </div>
  );
}

export default Invitation;