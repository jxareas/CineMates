import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [],
  exports: [DirectivesModule, PipesModule, UiModule],
})
export class CoreModule {}
