import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { enviarFiltro, filtrosValidos } from 'src/app/filtro/filtro.actions';
import { limpiarTodos } from '../todos.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: filtrosValidos = 'todos';
  listFiltros: filtrosValidos[];
  tareasPendientes: number = 0;
  constructor(private store: Store<AppState>) {
    this.listFiltros = ['todos', 'pendientes', 'completados'];
  }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(rs => this.filtroActual = rs);
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.tareasPendientes = state.todos.filter(item => !item.completado).length;
    });
  }
  cambiarFiltro(item: filtrosValidos) {
    this.store.dispatch(enviarFiltro({ filtro: item }));
  }
  limpiarCompletados() {
    this.store.dispatch(limpiarTodos());
  }
}
