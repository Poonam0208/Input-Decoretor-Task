import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../model/movie';
import { MovieData } from '../../const/movie';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

  movieArr : Array<Imovie> = []
  constructor() { }

  ngOnInit(): void {

    this.movieArr = MovieData
  }

  TrackById(index : number, movie : Imovie){
    return movie.id
  }

}
