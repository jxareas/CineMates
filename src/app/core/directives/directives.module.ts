import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutDirective } from './click-out.directive';

@NgModule({
  declarations: [ClickOutDirective],
  exports: [ClickOutDirective],
})
export class DirectivesModule {}
