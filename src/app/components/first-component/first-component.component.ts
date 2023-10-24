import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = "Jonas"
  age: number = 26;
  job: string = "Programador";
  hobbies = ["Jogar Futebol", "Passear", "Estudar"];
  car = {
    name: "golf",
    year: 2013
  } 

}
