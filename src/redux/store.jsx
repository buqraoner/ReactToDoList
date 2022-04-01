import { configureStore } from "@reduxjs/toolkit"
import { todosSlice } from "./todos/TodosSlice";



export const store = configureStore({
    reducer: {
        todos: todosSlice,
    },
});




