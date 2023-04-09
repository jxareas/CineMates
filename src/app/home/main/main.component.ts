import { Component, OnInit } from '@angular/core';
import { TrendingMediaDto } from '../../media/dto/get-trending-last-week-response';
import { MediaService } from '../../media/api/media.service';
import { delay } from 'rxjs';
import { TopRatedMoviesDto } from '../../media/dto/get-top-rated-movies-response';

@Component({
  selector: 'jx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  trendingLastWeek: TrendingMediaDto[];
  topRated: TopRatedMoviesDto[];
  isLoadingTrending = true;
  isLoadingTopRated = true;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.subscribeToTrendingMovies();
    this.subscribeToTopRatedMovies();
  }

  subscribeToTrendingMovies(): void {
    this.isLoadingTrending = true;
    this.mediaService
      .fetchTrendingMedia()
      .pipe(delay(500))
      .subscribe({
        next: trendingMedia => {
          this.trendingLastWeek = trendingMedia.results;
          this.isLoadingTrending = false;
        },
        error: () => (this.isLoadingTrending = false),
      });
  }

  subscribeToTopRatedMovies(): void {
    this.isLoadingTopRated = true;
    this.mediaService
      .fetchTopRatedMovies()
      .pipe(delay(500))
      .subscribe({
        next: topRatedMoviesResponse => {
          this.topRated = topRatedMoviesResponse.results.slice(0, 10);
          this.isLoadingTopRated = false;
        },
        error: () => (this.isLoadingTopRated = false),
      });
  }
}
