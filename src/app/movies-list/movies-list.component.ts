import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  title: string = 'Liste de Films';

  showMovies: boolean = true;

  displayGuestList: boolean = true;
  moviesList: string[] = ["Dragon Ball Z", "une maison sur l'océan", "Boum le futur dév", "Jamais sans Boum quoi !"]

  constructor() { }

  ngOnInit(): void {
  }

}
