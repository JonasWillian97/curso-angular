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

  animals: Animal[] = []

  constructor(private listService: ListService) {
  }
  
  ngOnInit(){
    this.getAnimals();

  }

  showAge(animal: Animal):void{
    this.animalDetails =  `O animal ${animal.name} tem ${animal.age}`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(){
    this.listService.getAll().subscribe(retorno => this.animals = retorno)
  }
}
