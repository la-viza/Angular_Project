import { Injectable } from '@angular/core';
import { breakfast } from '../types/breakfast';
import { mockBreakfasts } from '../types/mock-breakfasts';
import { Observable, of } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class BreakfastService {
  constructor() {}

  //  API DATA GOES HERE

  getBreakfasts(): Observable<breakfast[]> {
    const breakfasts = of(mockBreakfasts);
    return breakfasts;
  }
  getBreakfast(name: string):Observable<breakfast> {
    const breakfast = mockBreakfasts.find(h => h.name === name)!;
    return of (breakfast);
  }
}

