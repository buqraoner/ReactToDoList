import React from 'react'
import { useSelector } from "react-redux"

function ToDoList() {

    const items = useSelector((state) => state.todos.todos);


    return (
        <ul className="todo-list">
            {items.map((item) => (
                <li key={item.id} className={item.completed ? "completed" : ""}>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>
                            {item.title}
                        </label>
                        <button class="destroy"></button>
                    </div>
                </li>
            ))
            };

        </ul >
    )

    {/*
            <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Learn JavaScript</label>
                    <button class="destroy"></button>
                </div>
            </li>*/}
}

export default ToDoList