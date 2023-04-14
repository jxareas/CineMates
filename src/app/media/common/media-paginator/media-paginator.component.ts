import {Component, Input} from '@angular/core';
import {GetTrendingLastWeekResponse} from "../../dto/get-trending-last-week-response";

@Component({
  selector: 'jx-media-paginator',
  templateUrl: './media-paginator.component.html',
  styleUrls: ['./media-paginator.component.scss']
})
export class MediaPaginatorComponent {
  @Input() trendingMedia: GetTrendingLastWeekResponse;
}
