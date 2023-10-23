import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { breakfast } from '../types/breakfast';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const breakfasts  = [
      { name: 'Pancakes', price: 6.99 },
      { name: 'Omelette', price: 8.49 },
      { name: 'Granola with Yogurt', price: 5.99 },
      { name: 'Avocado Toast', price: 7.29 },
      { name: 'Fruit Salad', price: 4.99 },
      { name: 'Smoothie', price: 6.49 },
      { name: 'Bagel with Cream Cheese', price: 3.99 },
      { name: 'Bacon and Eggs', price: 9.99 },
      { name: 'Cereal with Milk', price: 4.49 },
      { name: 'Waffles', price: 5.79 },
    ];
    ;
    return {breakfasts};
  }

  
}