import { Component, Input } from '@angular/core';

@Component({
  selector: 'jx-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent {
  @Input()
  movie: any;

  @Input()
  details: any;
}
