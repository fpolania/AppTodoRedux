import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter(item => item.completado);
      case 'pendientes':
        return todos.filter(item => !item.completado);
      default:
        return todos;

    }
  }

}
