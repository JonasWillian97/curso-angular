import { Component } from '@angular/core';
import {Animal} from 'src/app/model/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animalDetails = "";

  animals: Animal[] = [
    { name: "Fred", type: "Bird", age: 8 },
    { name: "Thor", type: "Dog", age: 2},
    {name: "Tchula", type: "Horse", age: 4}
  ]

  showAge(animal: Animal):void{
    this.animalDetails =  `O animal ${animal.name} tem ${animal.age}`;
  }

}
