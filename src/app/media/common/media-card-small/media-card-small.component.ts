import { Component, Input } from '@angular/core';
import { MediaCardSmallViewModel } from './media-card-small-view-model';

@Component({
  selector: 'jx-media-card-small',
  templateUrl: './media-card-small.component.html',
  styleUrls: ['./media-card-small.component.scss'],
})
export class MediaCardSmallComponent {
  @Input()
  movie: MediaCardSmallViewModel;
}
