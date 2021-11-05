import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';
export const enviarFiltro = createAction(
    '[Filtro] Enviar Filtro',
    props<{ filtro: filtrosValidos }>()
);