import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY, BASE_URL } from '../constants/constants';

@Injectable()
export class MediaApiInterceptor implements HttpInterceptor {
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    @Inject('API_KEY') private apiKey: string,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const newRequest = request.clone({
      url: `${this.baseUrl}/${request.url}`,
      setParams: {
        language: 'en',
        api_key: this.apiKey,
      },
    });
    return next.handle(newRequest);
  }
}
