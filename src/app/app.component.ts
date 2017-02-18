import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*template: `<h1>{{title}}</h1>
  <a [routerLink]="['']">Dashboars</a> &nbsp; &nbsp;&nbsp;
  <a [routerLink]="['/heroes']">Heroes</a>
  <router-outlet></router-outlet>
  `*/

  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Tanya';
}
