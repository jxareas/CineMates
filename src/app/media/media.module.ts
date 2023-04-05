import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MediaApiInterceptor } from './api/media-api.interceptor';
import { environment } from '../../environments/environment';
import { API_KEY, BASE_URL } from './constants/constants';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MediaApiInterceptor,
      multi: true,
    },
    {
      provide: BASE_URL,
      useValue: environment.baseUrl,
    },
    {
      provide: API_KEY,
      useValue: environment.apiKey,
    },
  ],
})
export class MediaModule {}
