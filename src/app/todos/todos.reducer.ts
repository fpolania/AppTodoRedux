import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, limpiarTodos, toggleAll, toggleCompletado } from './todos.actions';

export const estadoInicial: Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Salvar a thanos'),
    new Todo('Salvar el mundo eso es'),
    new Todo('Salvar el mundo claro que si')
];

const _todoReducer = createReducer(
    estadoInicial,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(limpiarTodos, (state) => state.filter(item => !item.completado)),
    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(toggleAll, (state, { completado }) => {
        return state.map(elemento => {
            return {
                ...elemento,
                completado: completado
            }
        })
    }),
    on(toggleCompletado, (state, { id }) => {
        return state.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    completado: !item.completado
                }
            } else {
                return item;
            }
        })
    }),
    on(editar, (state, { id, texto }) => {
        return state.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    texto: texto
                }
            } else {
                return item;
            }
        })
    }),
);
export function todoReducer(state = estadoInicial, action: Action) {
    return _todoReducer(state, action);
}