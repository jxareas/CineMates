import { Component, OnInit } from '@angular/core';
import { GetTrendingLastWeekResponse } from '../../../media/dto/get-trending-last-week-response';
import { MediaService } from '../../../media/api/media.service';
import {delay} from "rxjs";

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
    this.goToPage(tag)
  }

  goToPage(tag: string = 'popular', page: number = 1): void {
    this.isLoadingTrending = true;
    this.mediaService[tag](page)
      .pipe(delay(400))
      .subscribe({
      next: trendingMovies => {
        this.trendingMedia = trendingMovies;
        this.isLoadingTrending = false;
      },
      error: () => (this.isLoadingTrending = true),
    });
  }

  ngOnInit(): void {
    this.goToPage()
  }
}
