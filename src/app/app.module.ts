import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { AddFormComponent } from './add-form.component';
import { HeroService } from './hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {path: '',  component: DashboardComponent},
        {path: 'heroes',  component: HeroComponent}
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
