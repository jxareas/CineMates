import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CoreModule } from '../../core/core.module';
import { UiModule } from '../../core/ui/ui.module';
import { TabViewComponent } from './tab-view/tab-view.component';
import { SearchComponent } from './search/search.component';
import { MediaCommonModule } from '../../media/common/media-common.module';
import { SectionsContainerComponent } from './container/sections-container.component';

@NgModule({
  declarations: [MainComponent, TabViewComponent, SearchComponent, SectionsContainerComponent],
  imports: [CommonModule, MainRoutingModule, UiModule, MediaCommonModule],
})
export class MainModule {}
