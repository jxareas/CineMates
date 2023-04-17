import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'jx-media-tabs',
  templateUrl: './media-tabs.component.html',
  styleUrls: ['./media-tabs.component.scss'],
})
export class MediaTabsComponent {
  selectedTag: string = 'trending';

  @Output()
  tabItemClick = new EventEmitter<string>();

  goToTag(newTag: string): void {
    this.selectedTag = newTag;
    this.tabItemClick.emit(newTag);
  }
}
