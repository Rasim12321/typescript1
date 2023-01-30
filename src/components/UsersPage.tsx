import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "../Types/Types";
import List from "./List";
import { UserItem } from "./User";
import { useNavigate } from "react-router-dom";


export const UsersPage:FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try{
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      // const data = await response.json()
      setUsers(response.data)
      console.log(response)
    } catch(e){
      alert(e)
    }
  }

    return(
        <>
            <div>
            {/* <UserList users={users}></UserList> */}

            <List items={users} renderItem={(user:IUser)=> <UserItem
              onClick={() => navigate('/users/' + user.id) }
              user={user}
              key={user.id}/>} />
            </div>
        </>
    )
}