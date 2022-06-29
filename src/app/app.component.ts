import { Component } from '@angular/core';
import { todoItem } from './models/todoItem.model';
import { todoItems } from './models/todoItem.mocks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introduceAngular';
  creator = "Bilal Arıkan"

  paragraph:string = "Bu bir paragraftır."

  inputValue:string="";
  isChecked:boolean=false;
  isAllTasksDisplaying : boolean =true;
  buttonText: string = 'sadece yapılacakları göster'
  olay:string = ""

  todoItems:todoItem[] = todoItems

  getTotalTasksUnDone() {
    return this.todoItems.filter(item => !item.isDone).length;
  }
 say():string { 
  return this.todoItems.filter(x=>!x.isDone).length ==0 ? this.olay="Olay bitmiştir" : ""; }

 
  filter() {
    this.isAllTasksDisplaying = !this.isAllTasksDisplaying;  
    !this.isAllTasksDisplaying ? this.todoItems = this.todoItems.filter(x => !x.isDone) : this.todoItems = todoItems;

    this.buttonText = this.isAllTasksDisplaying ? 'sadece yapılacakları göster' : 'tümünü göster';
  }

  addNewTask(task:string){
    
      let item: todoItem = new todoItem(task, false);
      todoItems.push(item);
  }

}
