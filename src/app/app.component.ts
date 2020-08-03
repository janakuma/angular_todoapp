import { Component, OnInit } from '@angular/core';
import { Todo } from './interfaces/app-todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],  
  providers: [TodoService]
})

export class AppComponent  {
  title: string; 
  todos: Todo[];  
  todoDates: number[];
  beForEditCache: string;
  todoTitle: string;
  todoSay:string;
  idForTodo: number;  
  allcheck: boolean;
  todo: any;
  inputValue: string = '';  

  constructor(
    private todoService: TodoService
  ) {    
    
  } 

  ngOnInit() {
    this.allcheck = false;
    
    this.idForTodo = 4;
    this.title = "TODO APP";
    this.todos = [
      {        
        id: 1,
        title: 'ShapeRex website update',
        label: 'Website update!',
        checked: false,
        completed: false,
        editing: false,
        time: 15645613213,
        date: 2020709,
        del: false
      },
      {
        id: 2,        
        title: 'Get Excel Proposal',
        label: 'Website update!',
        checked: false,
        completed: false,
        editing: false,
        time: 15645613213,
        date: 2020710,
        del: false
      },
      {
        id: 3,
        title: 'ShapeRex website update',
        label: 'Website update!',
        checked: false,
        completed: false,
        editing: false,
        time: 15645613213,
        date: 2020709,
        del: false
      }    
    ]

    this.todoDates = this.getDate();    
  } 


  getDate(){
    return [];
  }

  // getTodosByDate(date) {
  //   return this.todos.filter((todo))
  // }

  //reverse loop
  // get reversedTodo() {
  //   //return this.todos.slice().reverse();
  //   return this.todos.slice();
  // }

  getCompleteLength(todos) {
    const count = this.todos.filter(n => n.completed === false);
    return `${count.length}`;
  }  

  editTodo(todo: Todo): void {
    this.beForEditCache = todo.title;
    todo.editing = true;

    console.log(this.beForEditCache)
  }


  handleAddTodo(inputValue) {
    const now = Date.now();    

    if(inputValue.trim().length === 0) {
      alert('텍스트를 입력해주세요');
      return; 
    }    

    this.todos.push({      
      id: this.idForTodo,
      title: inputValue,
      label: 'website',
      checked: false,
      completed: false,
      editing: false,
      time: now,
      date: 2020710,
      del: false
    })        
    this.idForTodo++;    
  }  

  doneEdit(todo) {    
    todo.editing = false;       
  }

  cancelEdit(todo) {    
    todo.title = this.beForEditCache;
    todo.editing = false;       

    console.log(this.beForEditCache);
  }

  completedTodo(todo) {
    todo.completed =! todo.completed;    
  }    
  
  delTodo(todo) {
    this.todo = this.todoService.delTodo(todo);
  }

  selectDelTodo(todo) {
    this.todos = this.todos.filter(t => !t.checked);
    this.allcheck = false;
    console.log(this.todos)
  }

  allCheck(todos) {  
    for( let item in todos) {
      todos[item].checked = this.allcheck;            
    }       
  }  
}