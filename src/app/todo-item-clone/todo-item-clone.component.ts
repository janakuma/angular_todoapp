import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interfaces/app-todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'todo-item-clone',
  templateUrl: './todo-item-clone.component.html',
  styleUrls: ['./todo-item-clone.component.scss']
})
export class TodoItemCloneComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delItem = new EventEmitter; 

  constructor() { }

  ngOnInit() {
  }

  delTodo(todo: Todo): void {   
    this.delItem.emit(todo);
  }    

}