import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crea todo',
    props<{ texto: string }>()
);
export const toggleCompletado = createAction(
    '[TODO] Toggle todo',
    props<{ id: number }>()
);
export const editar = createAction(
    '[TODO] Editar todo',
    props<{ id: number, texto: string }>()
);
export const borrar = createAction(
    '[TODO] Borras todo',
    props<{ id: number }>()
);
export const toggleAll = createAction(
    '[TODO] Completar todo',
    props<{ completado: boolean }>()
);