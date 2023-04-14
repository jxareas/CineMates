import { Component, OnInit } from '@angular/core';
import { TrendingMediaDto } from '../../dto/get-trending-last-week-response';
import { MediaService } from '../../api/media.service';
import { delay } from 'rxjs';

@Component({
  selector: 'jx-media-carousel',
  templateUrl: './media-carousel.component.html',
  styleUrls: ['./media-carousel.component.scss'],
})
export class MediaCarouselComponent implements OnInit {
  trendingLastWeek: TrendingMediaDto[];
  isLoadingTrending: boolean;

  constructor(private mediaService: MediaService) {}

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
          this.trendingLastWeek = trendingMedia.results;
          this.isLoadingTrending = false;
        },
        error: () => (this.isLoadingTrending = true),
      });
  }
}
