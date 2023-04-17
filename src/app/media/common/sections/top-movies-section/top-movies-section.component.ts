import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../api/media.service';
import { delay, map, of, take, takeUntil } from 'rxjs';

import {MovieDto} from "../../../dto/movie-dto";

@Component({
  selector: 'jx-top-movies-section',
  templateUrl: './top-movies-section.component.html',
  styleUrls: ['./top-movies-section.component.scss'],
})
export class TopMoviesSectionComponent implements OnInit {
  topRatedMovies: MovieDto[];
  isLoadingTopRatedMovies: boolean;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.subscribeToTopRatedMovies();
  }

  subscribeToTopRatedMovies(): void {
    this.isLoadingTopRatedMovies = true;
    this.mediaService
      .rated()
      .pipe(delay(1_000))
      .subscribe({
        next: topRatedMoviesResponse => {
          this.topRatedMovies = topRatedMoviesResponse.results.slice(0, 5);
          this.isLoadingTopRatedMovies = false;
        },
        error: () => (this.isLoadingTopRatedMovies = true),
      });
  }
}
