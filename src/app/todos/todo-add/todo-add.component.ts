import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { crear } from '../todos.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todoAdd: FormControl;
  constructor(private store: Store<AppState>) {
    this.todoAdd = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }
  agregar(): void {
    if (this.todoAdd.invalid) { return };
    this.store.dispatch(crear({ texto: this.todoAdd.value }));
    this.todoAdd.reset();
  }
}
