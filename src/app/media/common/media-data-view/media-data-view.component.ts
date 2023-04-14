import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GetTrendingLastWeekResponse} from "../../dto/get-trending-last-week-response";

@Component({
  selector: 'jx-media-data-view',
  templateUrl: './media-data-view.component.html',
  styleUrls: ['./media-data-view.component.scss']
})
export class MediaDataViewComponent {
  @Input() trendingMedia: GetTrendingLastWeekResponse;
  @Input() isLoading: boolean;
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
