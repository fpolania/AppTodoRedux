import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listTodo: Todo[];
  filtroActual: filtrosValidos;
  constructor(private store: Store<AppState>) { 
    this.listTodo = [];
  }

  ngOnInit(): void {
    // this.store.select('todos').subscribe(rs => this.listTodo = rs);
    this.store.subscribe(state =>  {
      this.listTodo = state.todos;
      this.filtroActual = state.filtro;
    })
  }

}
