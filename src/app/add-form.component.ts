import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from './hero';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
})

export class AddFormComponent {  

   hero: Hero; 
   heroes: Hero[];

  addHero(form: NgForm) {
    //console.log(form.value );
    console.log('Name: ' + form.value.name );
    this.hero = new Hero(100, form.value.name );
    this.heroes.push(this.hero);
  }



  constructor(private heroService: HeroService) {  // heroService becomes class variable
    this.heroes = this.heroService.getHeroes();
  }

}