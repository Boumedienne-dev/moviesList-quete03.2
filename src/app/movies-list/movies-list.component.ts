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

  constructor() { }

  ngOnInit(): void {
  }

}
