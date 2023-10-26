import { Injectable } from '@angular/core';
import { Animal } from '../model/Animal';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private url = "http://localhost:3000/animals";

  constructor(private http: HttpClient) {

   }

  remove(animals: Animal[], animal: Animal){
    console.log("Ativando o service...");
    return animals.filter((a) => animal.name != a.name);
  }

  getAll():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.url);
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.url}/${id}`);
  }
}
