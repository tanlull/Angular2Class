import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']

})

export class HeroComponent {
  title = 'Angular 2  Hero Workshop';
  hero: Hero ;
  targetHero: Hero ;
  heroes: Hero[];
  //heroes: Hero[] = HEROES;

  changeHero(hero: Hero ): void {
    console.log('change hero ' + hero.id + ' ' + hero.name);
    this.hero = hero;
  }

  addHero(name: String){
    this.targetHero = new Hero(100, name);
    this.heroes.push(this.targetHero);
  }

  constructor(private heroService: HeroService) {  // heroService becomes class variable
    this.heroes = this.heroService.getHeroes();
  }
}

