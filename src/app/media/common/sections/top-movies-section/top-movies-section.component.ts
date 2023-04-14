import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../api/media.service';
import { delay, map, of, take, takeUntil } from 'rxjs';
import { TopRatedMoviesDto } from '../../../dto/get-top-rated-movies-response';

@Component({
  selector: 'jx-top-movies-section',
  templateUrl: './top-movies-section.component.html',
  styleUrls: ['./top-movies-section.component.scss'],
})
export class TopMoviesSectionComponent implements OnInit {
  topRatedMovies: TopRatedMoviesDto[];
  isLoadingTopRatedMovies: boolean;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.subscribeToTopRatedMovies();
  }

  subscribeToTopRatedMovies(): void {
    this.isLoadingTopRatedMovies = true;
    this.mediaService
      .fetchTopRatedMovies()
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
