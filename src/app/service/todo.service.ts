import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/app-todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {   }  

  delTodo(todo) {   
    todo.del = !todo.del;   
  }
}