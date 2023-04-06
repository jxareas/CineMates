import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MediaModule} from "../../media/media.module";

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, NgOptimizedImage, MediaModule],
  exports: [FooterComponent, HeaderComponent],
})
export class HomeCommonModule {}
