import { Component } from '@angular/core';

@Component({
  selector: 'jx-media-pager',
  templateUrl: './media-pager.component.html',
  styleUrls: ['./media-pager.component.scss'],
})
export class MediaPagerComponent {
  tagActive: string = 'popular';

  goToTag(tag: string): void {
    // TODO : Handle change of tag function
  }
}
