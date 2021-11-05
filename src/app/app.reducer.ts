import { ActionReducerMap } from "@ngrx/store";
import { filtrosValidos } from "./filtro/filtro.actions";
import { filtroReducer } from "./filtro/filtro.reducer";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todos.reducer";

export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos;
}
export const appRedux: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}