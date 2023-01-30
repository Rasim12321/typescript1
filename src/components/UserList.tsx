import React, { FC } from "react";
import { IUser } from "../Types/Types";
import { UserItem } from "./User";

interface UserListProps {
    users: IUser[]
}

export const UserList:FC<UserListProps> = ({users}) => {
    return(
        <>
            <div>
                {/* {users.map(user =>
                    <UserItem onClick={...} key={user.id} user={user}></UserItem>
                    )} */}
            </div>
        </>
    )
}