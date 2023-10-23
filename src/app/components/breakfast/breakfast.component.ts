import { Component } from '@angular/core';
import { breakfast } from 'src/app/types/breakfast';
import { BreakfastService } from 'src/app/services/breakfast.service';


@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css'],
})
export class BreakfastComponent {

constructor(private breakfastService:BreakfastService) {

}


  breakfastVariable: breakfast = {
    price: 15,
    name: 'Full English',
  };
  breakfastsArray: breakfast[] = [];
  selectedBreakfast? : breakfast;

  onSelect(breakfast: breakfast)
  {
    this.selectedBreakfast = breakfast;
  }

  
getBreakfasts() {
this.breakfastService.getBreakfasts().subscribe(breakfast => this.breakfastsArray = breakfast);

}

ngOnInit():void{
  this.getBreakfasts();
}

}
