import { Action, createReducer, on } from '@ngrx/store';
import { enviarFiltro, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos' as any;
const _filtroReducer = createReducer(
    initialState,
    on(enviarFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state = initialState, action: Action) {
    return _filtroReducer(state, action);
}