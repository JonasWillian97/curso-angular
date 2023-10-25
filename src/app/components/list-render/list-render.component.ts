import { Component } from '@angular/core';
import {Animal} from 'src/app/model/Animal';
import {ListService} from 'src/app/services/list.service';

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

  constructor(private listService: ListService) {

  }

  showAge(animal: Animal):void{
    this.animalDetails =  `O animal ${animal.name} tem ${animal.age}`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

}
