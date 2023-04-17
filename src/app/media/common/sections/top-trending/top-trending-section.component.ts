import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../api/media.service';
import { delay } from 'rxjs';
import {TrendingMediaDto} from "../../../dto/trending-media-dto";

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
      .trending()
      .pipe(delay(1_000))
      .subscribe(response => {
        this.trendingMedia = response.results.slice(0, 5);
        this.isLoadingTrendingMedia = false;
      });
  }
}
