import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { borrar, editar, toggleCompletado } from '../todos.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputRefLocal') inputRefLocal: ElementRef;
  chekCompletado: FormControl;
  inputForm: FormControl;
  editando: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chekCompletado = new FormControl(this.todo.completado);
    this.inputForm = new FormControl(this.todo.texto, Validators.required);
    this.chekCompletado.valueChanges.subscribe(value => {
      this.store.dispatch(toggleCompletado({ id: this.todo.id }));
    });
  }
  editar() {
    this.editando = true;
    this.inputForm.setValue(this.todo.texto);
    setTimeout(() => {
      this.inputRefLocal.nativeElement.select();
    }, 1)
  }
  terminarEdicion(): void {
    this.editando = false;
    if (this.inputForm.invalid) { return };
    if (this.inputForm.value === this.todo.texto) { return };
    this.store.dispatch(editar({ id: this.todo.id, texto: this.inputForm.value }));
  }
  eliminarItem(): void {
    this.store.dispatch(borrar({ id: this.todo.id }));
  }
}
