import { Injectable } from '@angular/core';
import { Animal } from '../model/Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    console.log("Ativando o service...");
    return animals.filter((a) => animal.name != a.name);
  }
}
