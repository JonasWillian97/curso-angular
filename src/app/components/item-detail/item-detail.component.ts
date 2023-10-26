import { Component } from '@angular/core';
import { Animal } from 'src/app/model/Animal';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {

  animal?: Animal;

  constructor(private listService: ListService, private router: ActivatedRoute){
    this.getAnimal();
  }

  getAnimal(){
    const id = Number (this.router.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe(retorno => this.animal = retorno);
  }
}
