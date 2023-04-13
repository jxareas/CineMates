import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCardSmallComponent } from './media-card-small/media-card-small.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { MediaListComponent } from './media-list/media-list.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../core/pipes/pipes.module';
import { UiModule } from '../../core/ui/ui.module';
import { MediaPagerComponent } from './media-pager/media-pager.component';
import { TopMoviesSectionComponent } from './sections/top-movies-section/top-movies-section.component';
import { MediaSectionComponent } from './sections/media-section/media-section.component';
import { TopShowsSectionComponent } from './sections/top-shows-section/top-shows-section.component';

@NgModule({
  declarations: [
    MediaCardSmallComponent,
    MediaCardComponent,
    MediaListComponent,
    MediaPagerComponent,
    TopMoviesSectionComponent,
    MediaSectionComponent,
    TopShowsSectionComponent,
  ],
  imports: [CommonModule, RouterModule, PipesModule, UiModule],
  exports: [MediaCardSmallComponent, MediaCardComponent, MediaListComponent, MediaPagerComponent, TopMoviesSectionComponent, TopShowsSectionComponent],
})
export class MediaCommonModule {}
