import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "../Types/Types";
import { useParams, useNavigate } from "react-router-dom";

interface UserItemPageParams{
     id: any,
}

export const UserItemPage:FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams()
    const navigate = useNavigate()
    console.log(params)
  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try{
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      // const data = await response.json()
      setUser(response.data)
      console.log(response)
    } catch(e){
      alert(e)
    }
  }

    return(
        <>
            <button onClick={()=>navigate(-1)}>back</button>
            <h1>Page of {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.name} live in city {user?.address.city} in street {user?.address.street}
            </div>
        </>
    )
}