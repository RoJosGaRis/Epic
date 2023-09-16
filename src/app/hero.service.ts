import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.log('Fetched Heroes');
    return heroes;
  }
  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.log(`Fetched Hero Id = ${id}`);
    return of(hero);
  }
  private log(message: String) {
    this.messageService.add(`Hero Service: ${message}`);
  }
}
