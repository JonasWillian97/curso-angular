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

  remove(id: number){
    return this.http.delete<Animal>(`${this.url}/${id}`);
  }

  getAll():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.url);
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.url}/${id}`);
  }
}
