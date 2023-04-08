import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GetMoviesByQueryResponse} from "../../dto/get-movies-by-query-response";
import {MediaCardViewModel} from "../media-card/media-card-viewmodel";
import {GetTrendingLastWeekResponse} from "../../dto/get-trending-last-week-response";

@Component({
  selector: 'jx-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent {
  @Input() trendingMedia: GetTrendingLastWeekResponse;
  @Input() isLoading = false;
  @Output() changePage: EventEmitter<any> = new EventEmitter();

  previousPage(): void {
    //TODO : Handle navigation to previous page
  }

  nextPage(): void {
    //TODO : Handle navigation to next page
  }

  goToPage(page: number): void {
    //TODO : Handle custom page navigation
  }
}
