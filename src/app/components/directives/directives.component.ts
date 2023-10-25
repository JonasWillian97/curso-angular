import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  size: number = 30;
  align: string = 'center';
  marginTop: number = 20;
  font: string = "Helvética";
  color: string = "blue";

  classes = ["green-title", "small-title"];

}
