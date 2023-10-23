import { Component, OnInit } from '@angular/core';
import { breakfast } from 'src/app/types/breakfast';
import { BreakfastService } from 'src/app/services/breakfast.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  breakfasts: breakfast[] = [];

  constructor(private breakfastService: BreakfastService) { }

  ngOnInit(): void {
    this.getBreakfasts();
  }

  getBreakfasts(): void {
    this.breakfastService.getBreakfasts()
      .subscribe(breakfast => this.breakfasts = breakfast.slice(1, 5));
  }
}