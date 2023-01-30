import React, { FC } from "react";
import { IUser } from "../Types/Types";

interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void
}

export const UserItem:FC<UserItemProps> = ({user, onClick}) => {
    return(
        <>
            <div>
                    <div onClick={()=>onClick(user)} style={{padding: 15, border: '2px solid black'}}>
                        {user.id}. {user.name} live in city {user.address.city} in street {user.address.street}
                    </div>
            </div>
        </>
    )
}