import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { DisplayGuestsDirective } from './display-guests.directive';
import { HightLightDirective } from './hight-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    DisplayGuestsDirective,
    HightLightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
