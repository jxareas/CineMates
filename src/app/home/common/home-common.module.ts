import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MediaModule } from '../../media/media.module';
import { RouterModule } from '@angular/router';
import { MovieDropdownComponent } from './menu/movie-dropdown/movie-dropdown.component';
import { GenreDropdownComponent } from './menu/genre-dropdown/genre-dropdown.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { LogoComponent } from './header/logo/header-logo.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MovieDropdownComponent,
    GenreDropdownComponent,
    MenuItemComponent,
    LogoComponent,
  ],
  imports: [CommonModule, NgOptimizedImage, MediaModule, RouterModule],
  exports: [FooterComponent, HeaderComponent],
})
export class HomeCommonModule {}
