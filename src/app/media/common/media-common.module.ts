import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCardSmallComponent } from './media-card-small/media-card-small.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { MediaListComponent } from './media-list/media-list.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../core/pipes/pipes.module';
import { UiModule } from '../../core/ui/ui.module';
import { MediaTabsComponent } from './media-tabs/media-tabs.component';
import { TopMoviesSectionComponent } from './sections/top-movies-section/top-movies-section.component';
import { MediaSectionComponent } from './sections/media-section/media-section.component';
import { TopShowsSectionComponent } from './sections/top-shows-section/top-shows-section.component';
import { TopTrendingSectionComponent } from './sections/top-trending/top-trending-section.component';
import { MediaCarouselComponent } from './media-carousel/media-carousel.component';
import { MediaDataViewComponent } from './media-data-view/media-data-view.component';
import { MediaPaginatorComponent } from './media-paginator/media-paginator.component';


@NgModule({
  declarations: [
    MediaCardSmallComponent,
    MediaCardComponent,
    MediaListComponent,
    MediaTabsComponent,
    TopMoviesSectionComponent,
    MediaSectionComponent,
    TopShowsSectionComponent,
    TopTrendingSectionComponent,
    MediaCarouselComponent,
    MediaDataViewComponent,
    MediaPaginatorComponent,
  ],
  imports: [CommonModule, RouterModule, PipesModule, UiModule],
  exports: [
    MediaCardSmallComponent,
    MediaCardComponent,
    MediaListComponent,
    MediaTabsComponent,
    TopMoviesSectionComponent,
    TopShowsSectionComponent,
    MediaSectionComponent,
    TopTrendingSectionComponent,
    MediaCarouselComponent,
    MediaDataViewComponent,
  ],
})
export class MediaCommonModule {}
