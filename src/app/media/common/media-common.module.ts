import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCardSmallComponent } from './media-card-small/media-card-small.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { MediaListComponent } from './media-list/media-list.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../core/pipes/pipes.module';
import { UiModule } from '../../core/ui/ui.module';
import { MediaPagerComponent } from './media-pager/media-pager.component';

@NgModule({
  declarations: [
    MediaCardSmallComponent,
    MediaCardComponent,
    MediaListComponent,
    MediaPagerComponent,
  ],
  imports: [CommonModule, RouterModule, PipesModule, UiModule],
  exports: [MediaCardSmallComponent, MediaCardComponent, MediaListComponent, MediaPagerComponent],
})
export class MediaCommonModule {}
