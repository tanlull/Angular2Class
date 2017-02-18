import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';

@Component({
    selector: 'app-dashboard',
   /* template: `<h3>Top Heroes</h3>
                <div class="grid grid-pad">
                <a *ngFor="let hero of heroes"  class="col-1-4">
                    <div class="module hero">
                    <h4>{{hero.name}}</h4>
                    </div>
                </a>
                </div>
                `,*/
     templateUrl: './dashboard.component.html',
     styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    ngOnInit() {
        this.heroes = HEROES.slice(1, 5);
    }
}
