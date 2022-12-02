import { TestBed } from '@angular/core/testing';

import { PeliculasHttpService } from './peliculas-http.service';

describe('PeliculasHttpService', () => {
  let service: PeliculasHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculasHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
