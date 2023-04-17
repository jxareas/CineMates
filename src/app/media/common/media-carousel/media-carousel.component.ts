import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../api/media.service';
import { delay } from 'rxjs';
import {TrendingMediaDto} from "../../dto/trending-media-dto";

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
      .trending()
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
