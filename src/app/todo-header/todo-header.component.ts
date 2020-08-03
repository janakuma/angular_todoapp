import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interfaces/app-todo';


@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {
  @Input() inputValue;
  @Output() clickAddTodo = new EventEmitter();
  title:string = "Todo List Component";      

  constructor() { } 

  ngOnInit() {
      
  }  

  handleAddTodo(inputValue) {
    this.clickAddTodo.emit(inputValue);
    this.inputValue = '';
  }
}