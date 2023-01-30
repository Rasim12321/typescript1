import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { iTodos } from "../Types/Types";
import List from "./List";
import { TodoItem } from "./TodoItem";

interface TodosPageProps {
}

export const TodosPage:FC<TodosPageProps> = () => {
    const [todos, setTodos] = useState<iTodos[]>([])

    useEffect(() => {
        fetchTodos()
      }, [])

    async function fetchTodos() {
      try {
        const response = await axios.get<iTodos[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(response.data)
        console.log(response.data)
      } catch (error) {
        alert(error)
      }
    }

    return(
        <>
            <div>
            <List items={todos} renderItem={(todo:iTodos)=> <TodoItem todo={todo} key={todo.id}/>} />

            </div>
        </>
    )
}