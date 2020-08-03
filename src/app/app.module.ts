import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './service/todo.service';


@NgModule({
  imports: [ BrowserModule, FormsModule, BrowserAnimationsModule ],
  declarations: [ 
    AppComponent,     
    TodoHeaderComponent,
    TodoItemComponent, 
  ],
  bootstrap: [ AppComponent ],
  providers: [TodoService]
})
export class AppModule { }
