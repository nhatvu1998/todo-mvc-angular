import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  isHovered: false;
  isEditing: false;
  isChecked: false;

  @Input() todo: Todo;
  @Output() changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();


  constructor() { }

  ngOnInit() {
  }

  changeTodoStatus() {
    this.changeStatus.emit({...this.todo, isCompleted : !this.todo.isCompleted});
  }

  submitEdit(event: KeyboardEvent) {
    const {keyCode} = event;
    event.preventDefault();
    if (keyCode === 13) {
      this.editTodo.emit(this.todo);
      this.isEditing = false;
    }
  }

  deleteTodoItem() {
    this.deleteTodo.emit(this.todo);
  }

}
