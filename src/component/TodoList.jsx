import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { toggle } from '../redux/todos/TodosSlice';


function ToDoList() {
    dispatch = useDispatch();
    const items = useSelector((state) => state.todos.todos);


    return (
        <ul className="todo-list">
            {items.map((item) => (
                <li key={item.id} className={item.completed ? "completed" : ""}>
                    <div className="view">
                        <input className="toggle" type="checkbox"
                            onChange={() => dispatch(toggle({ item: item.id }))} />
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