import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: "Safety Dog" },
      { id: 2, name: "Danger Cat" },
      { id: 3, name: "Cookie Munster"},
      { id: 4, name: "Vacuum Man" },
      { id: 5, name: "Science Woman" },
      { id: 6, name: "Junior Java" },
      { id: 7, name: "Monocle McGiver" },
      { id: 8, name: "Hero 2: Hero Harder" },
      { id: 9, name: "Man Bat" },
      { id: 10, name: "Hero 3: A Good Day to Hero Hard"},
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}