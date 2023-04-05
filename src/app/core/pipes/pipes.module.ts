import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuntimePipe } from './runtime.pipe';

@NgModule({
  declarations: [RuntimePipe],
  exports: [RuntimePipe],
})
export class PipesModule {}
