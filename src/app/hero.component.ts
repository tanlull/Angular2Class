import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']

})


export class HeroComponent {
  title = 'Angular 2  Hero Workshop';
  heroName: String = '';
  heroID: number;
 // hero: Hero = {id: 1, name: 'Batman'};
  heroes: Hero[] = HEROES;

  changeHero(hero: Hero ): void {
    console.log('change hero ' + hero.id + ' ' + hero.name);
    this.heroName = hero.name;
    this.heroID = hero.id ;
  }
}

