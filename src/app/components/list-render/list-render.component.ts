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
   this.animals = this.animals.filter((a) => animal.name != a.name);
     this.listService.remove(animal.id!).subscribe();
  }

  getAnimals(){
    this.listService.getAll().subscribe(retorno => this.animals = retorno)
  }
}
