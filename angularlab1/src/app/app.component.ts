import { Component } from '@angular/core';

interface ToDo{
  task : string,
  completed : boolean

}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularlab1';
  toDoObjects : ToDo[] = [
    {
      task: "take the dog out",
      completed : false,
    },
    {
      task: "go to the store",
      completed : true,
    },
    {
      task : "get gas",
      completed : false,
    },
    {
      task : "wash car",
      completed : false,
    }
  ]

  filteredToDo = [...this.toDoObjects];

  taskInput : string;
  filterInput : string;
  

  addTask(){
    let newTask : ToDo = {
      task : this.taskInput,
      completed : false,
    }
    this.toDoObjects.push(newTask);
    this.filterSearch();
  }

  removeTask(chore){
    console.log(chore)
    let indexNumber = this.toDoObjects.indexOf(chore)
    this.toDoObjects.splice(indexNumber, 1);
    this.filterSearch();
  }

  markComplete(chore){
    let indexNumber = this.toDoObjects.indexOf(chore);
    this.toDoObjects[indexNumber].completed = true;
    this.filterSearch();
  }

  filterSearch(){
    const lower = this.filterInput ? this.filterInput.toLowerCase() : '';
    this.filteredToDo = this.toDoObjects.filter(item => item.task.toLowerCase().includes(lower));
  }

}
