import { NgModule } from '@angular/core';
import {CommonModule, DecimalPipe, NgIf} from '@angular/common';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { PaginatorComponent } from './paginator/paginator.component';



@NgModule({
    declarations: [SkeletonComponent, PaginatorComponent],
  exports: [SkeletonComponent, PaginatorComponent],
    imports: [
        DecimalPipe,
        NgIf
    ]
})
export class UiModule { }
