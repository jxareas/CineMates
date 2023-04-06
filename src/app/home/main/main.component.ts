import {Component, OnInit} from '@angular/core';
import {GetTrendingLastWeekResponse, TrendingMediaDto} from "../../media/dto/get-trending-last-week-response";
import {MediaService} from "../../media/api/media.service";
import {delay} from "rxjs";
import {TopRatedMoviesDto} from "../../media/dto/get-top-rated-movies-response";

@Component({
  selector: 'jx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  trendingLastWeek: TrendingMediaDto[];
  topRated : TopRatedMoviesDto[];
  isLoadingTrending = true;
  isLoadingTopRated = true;

  constructor(private mediaService : MediaService) {

  }

  ngOnInit(): void {
    this.subscribeToTrendingMovies();
  }

  subscribeToTrendingMovies(): void {
    this.isLoadingTrending = true;
    this.mediaService
      .fetchTrendingMedia()
      .pipe(delay(500))
      .subscribe({
        next: trendingMedia => {
          this.trendingLastWeek = trendingMedia.results.slice(0, 7);
          this.isLoadingTrending = false;
        },
        error: () => (this.isLoadingTrending = false),
      });
  }



}
