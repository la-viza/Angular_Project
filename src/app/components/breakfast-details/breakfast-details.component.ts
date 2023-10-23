import { Component, Input } from '@angular/core';
import { BreakfastService } from 'src/app/services/breakfast.service';
import { breakfast } from "src/app/types/breakfast";


@Component({
  selector: 'app-breakfast-details',
  templateUrl: './breakfast-details.component.html',
  styleUrls: ['./breakfast-details.component.css']
})
export class BreakfastDetailsComponent {

@Input() breakfastDetails?: breakfast;
constructor (
  private route: ActivatedRoute;
  private breakfastService: BreakfastService;
  private location: Location,


) {}
ngOnInit() {
  this.getBreakfast();
}
getBreakfast() {
  const name = this.route.snapshot.paramMap.get('name');
  this.breakfastService.getBreakfasts(name as string).subscribe(breakfast=> this.breakfastDetails = breakfast);
}
}
