import { Component, OnInit } from '@angular/core';
import { GetTrendingLastWeekResponse } from '../../../media/dto/get-trending-last-week-response';
import { MediaService } from '../../../media/api/media.service';

@Component({
  selector: 'jx-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss'],
})
export class TabViewComponent implements OnInit {
  tagActive: string = 'popular';

  trendingMedia: GetTrendingLastWeekResponse;
  isLoadingTrending: boolean;

  constructor(private mediaService: MediaService) {}

  goToTag(tag: string): void {
    // TODO : Handle change of tag function
  }

  goToPage(number: string): void {
    // TODO : Handle change of page function
  }

  ngOnInit(): void {
    this.isLoadingTrending = true;
    this.mediaService
      .fetchTrendingMedia()
      .subscribe({
        next: trendingMovies => {
          this.trendingMedia = trendingMovies;
          this.isLoadingTrending = false;
        },
        error: () => (this.isLoadingTrending = true),
      });
  }
}
