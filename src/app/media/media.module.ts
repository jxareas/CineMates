import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MediaApiInterceptor } from './api/media-api.interceptor';
import { environment } from '../../environments/environment';
import { MediaService } from './api/media.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    MediaService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MediaApiInterceptor,
      multi: true,
    },
    {
      provide: 'BASE_URL',
      useValue: environment.baseUrl,
    },
    {
      provide: 'API_KEY',
      useValue: environment.apiKey,
    },
  ],
})
export class MediaModule {}
