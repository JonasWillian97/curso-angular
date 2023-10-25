import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals = [
    { name: "Fred", type: "DBird"},
    { name: "Thor", type: "Dog"},
    {name: "Tchula", type: "Horse"}
  ]

}
