/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusicasService } from './musicas.service';

describe('Service: Musicas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicasService]
    });
  });

  it('should ...', inject([MusicasService], (service: MusicasService) => {
    expect(service).toBeTruthy();
  }));
});
