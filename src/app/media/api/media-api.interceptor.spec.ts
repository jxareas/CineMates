import { TestBed } from '@angular/core/testing';

import { MediaApiInterceptor } from './media-api.interceptor';

describe('MediaApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MediaApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MediaApiInterceptor = TestBed.inject(MediaApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
