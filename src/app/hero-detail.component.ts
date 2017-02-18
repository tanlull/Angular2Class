import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-hero-detail',
    template: ` <h1>{{detailTitle}}</h1><h2>{{varHero.name}} details!</h2>
        <div><label>id: </label>{{varHero.id}}</div><div>
        <label>name: </label>{{varHero.name}}</div> `
})

export class HeroDetailComponent implements OnInit{
    ngOnInit() {
        this.varHero = new Hero(22, 'xxxx');
    }

    @Input()
    varHero: Hero;// = new Hero(1, 'Test');

    @Input()
    detailTitle: String;
}
