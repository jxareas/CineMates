import {Component, OnInit} from '@angular/core';
import {GetTrendingLastWeekResponse} from "../../../media/dto/get-trending-last-week-response";
import {MediaService} from "../../../media/api/media.service";

@Component({
  selector: 'jx-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  tagActive : string = 'popular';

  trendingMedia : GetTrendingLastWeekResponse;
  isLoadingTrending = false;

  constructor(private mediaService: MediaService) {}

  goToTag(tag: string): void {
    // TODO : Handle change of tag function
  }

  goToPage(number: string): void {
    // TODO : Handle change of page function
  }

  ngOnInit(): void {
    this.mediaService.fetchTrendingMedia().subscribe({
      next: trendingMovies => {
        this.trendingMedia = trendingMovies
      },
    });
  }



}
