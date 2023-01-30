import React, { FC } from "react";
import { iTodos } from "../Types/Types";

interface TodoItemProps {
    todo: iTodos,
}

export const TodoItem:FC<TodoItemProps> = ({todo}) => {
    return(
        <>
            <div>
                <input type="checkbox" onChange={()=>null} checked={todo.completed} />
                {todo.id}. {todo.title }
            </div>
        </>
    )
}