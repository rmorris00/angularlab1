import { Component } from '@angular/core';

interface chore{
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
  toDoObjects : chore[] = [
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
}
