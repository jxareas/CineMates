import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetMoviesByQueryResponse } from '../../dto/get-movies-by-query-response';
import { MediaCardViewModel } from '../media-card/media-card-viewmodel';
import { GetTrendingLastWeekResponse } from '../../dto/get-trending-last-week-response';

@Component({
  templateUrl: './media-list.component.html',
  selector: 'jx-media-list',
  styleUrls: ['./media-list.component.scss'],
})
export class MediaListComponent {
  @Input() trendingMedia: GetTrendingLastWeekResponse;
  @Input() isLoading: boolean;
}
