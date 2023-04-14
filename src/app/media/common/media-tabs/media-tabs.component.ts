import { Component } from '@angular/core';

@Component({
  selector: 'jx-media-tabs',
  templateUrl: './media-tabs.component.html',
  styleUrls: ['./media-tabs.component.scss'],
})
export class MediaTabsComponent {
  tagActive: string = 'popular';

  goToTag(tag: string): void {
    this.tagActive = tag;
  }
}
