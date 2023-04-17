import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../api/media.service';
import {delay, filter, map} from 'rxjs';
import {TvShowDto} from "../../../dto/tv-show-dto";

@Component({
  selector: 'jx-top-shows-section',
  templateUrl: './top-shows-section.component.html',
  styleUrls: ['./top-shows-section.component.scss'],
})
export class TopShowsSectionComponent implements OnInit {
  topRatedShows: TvShowDto[];
  isLoadingTopRatedShows: boolean;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.subscribeToTopRatedShows();
  }

  subscribeToTopRatedShows(): void {
    this.isLoadingTopRatedShows = true;
    this.mediaService
      .fetchTopRatedShows()
      .pipe(
        map(response => response.results),
        delay(1_000),
      )
      .subscribe({
        next: topRatedMoviesResponse => {
          this.topRatedShows = topRatedMoviesResponse.filter(show => show.popularity > 20).slice(0, 5);
          this.isLoadingTopRatedShows = false;
        },
        error: () => (this.isLoadingTopRatedShows = true),
      });
  }
}
