import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Todo } from '../interfaces/app-todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0, transform: 'translateY(30px)'
        }),

        animate(300, style({
          opacity: 1, transform: 'translateY(0px)'
        }))
      ]),

      transition(':leave', [        
        animate(300, style({
          opacity: 0, transform: 'translateY(30px)'
        }))
      ])

    ])
  ]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;    

  @Output() doneItem = new EventEmitter();
  @Output() editItem = new EventEmitter();
  @Output() cancelItem = new EventEmitter();  
  @Output() completeItem = new EventEmitter();   
  @Output() delItem = new EventEmitter();    

  todoSay: string;  

  constructor( private todoService: TodoService ) { }

  ngOnInit() {
  }     
  
  doneEdit(todo:Todo):void {
    this.doneItem.emit(todo);
  }

  editTodo(todo: Todo): void {
    this.editItem.emit(todo);
  }

  cancelEdit(todo: Todo): void {
    this.cancelItem.emit(todo);
  }
  
  completedTodo(todo: Todo): void {
    this.completeItem.emit(todo);
  }

  delTodo(todo: Todo): void {   
    this.delItem.emit(todo);
  }    

  getFormattedTime(time) {
    const today = new Date(time),
          year = today.getFullYear(),
          month = today.getMonth(),
          date = today.getDate(),
          hour = today.getHours(),
          minutes = today.getMinutes(),
          local = today.toLocaleString(),
          timeStamp = `${year}.${month}.${date}`;

    return timeStamp + '/' + local;
  }
}