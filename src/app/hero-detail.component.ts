import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-hero-detail',
    template: ` <h1>{{detailTitle}}</h1><h2>{{varHero.name}} details!</h2>
        <div><label>id: </label>{{varHero.id}}</div><div>
        <label>name: </label>{{varHero.name}}</div> `
})

export class HeroDetailComponent{
    @Input()
    varHero: Hero = new Hero();

    @Input()
    detailTitle: String;
}
