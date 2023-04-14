import { Component, OnInit } from '@angular/core';
import { TrendingMediaDto } from '../../../dto/get-trending-last-week-response';
import { MediaService } from '../../../api/media.service';
import { delay } from 'rxjs';

@Component({
  selector: 'jx-top-trending-section',
  templateUrl: './top-trending-section.component.html',
  styleUrls: ['./top-trending-section.component.scss'],
})
export class TopTrendingSectionComponent implements OnInit {
  trendingMedia: TrendingMediaDto[];
  isLoadingTrendingMedia: boolean;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.subscribeToTrendingMedia();
  }

  subscribeToTrendingMedia(): void {
    this.isLoadingTrendingMedia = true;
    this.mediaService
      .fetchTrendingMedia()
      .pipe(delay(1_000))
      .subscribe(response => {
        this.trendingMedia = response.results.slice(0, 5);
        this.isLoadingTrendingMedia = false;
      });
  }
}
