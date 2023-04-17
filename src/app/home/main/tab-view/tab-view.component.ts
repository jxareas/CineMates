import { Component, OnInit } from '@angular/core';
import { GetTrendingLastWeekResponse } from '../../../media/dto/get-trending-last-week-response';
import { MediaService } from '../../../media/api/media.service';
import { delay } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'jx-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss'],
})
export class TabViewComponent implements OnInit {
  tagActive: string = 'popular';

  trendingMedia: GetTrendingLastWeekResponse;
  isLoadingTrending: boolean;

  constructor(
    private mediaService: MediaService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
  ) {}

  goToTag(tag: string): void {
    this.goToPage(tag);
  }

  goToPage(tag: string = 'popular', page: number = 1): void {
    this.isLoadingTrending = true;
    this.mediaService[tag](page)
      .pipe(delay(400))
      .subscribe({
        next: trendingMovies => {
          this.trendingMedia = trendingMovies;

          let params = new HttpParams();
          params = params.set('tag', tag);
          if (page > 1) {
            params = params.set('page', page);
          }

          this.location.go('/', params.toString());

          this.isLoadingTrending = false;
        },
        error: () => (this.isLoadingTrending = true),
      });
  }

  ngOnInit(): void {
    const paramMap = this.activatedRoute.snapshot.queryParamMap;
    const page = +paramMap.get('page');
    const tag = paramMap.get('tag');
    this.goToPage(tag || 'popular', page || 1);
  }
}
