import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuntimePipe } from './runtime.pipe';
import { RoundPipe } from './round.pipe';

@NgModule({
  declarations: [RuntimePipe, RoundPipe],
  exports: [RuntimePipe, RoundPipe],
})
export class PipesModule {}
