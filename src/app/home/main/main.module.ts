import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CoreModule } from '../../core/core.module';
import {UiModule} from "../../core/ui/ui.module";
import { PortalComponent } from './portal/portal.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [MainComponent, PortalComponent, SearchComponent],
  imports: [CommonModule, MainRoutingModule, UiModule],
})
export class MainModule {}
