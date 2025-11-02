import { inject, TestBed } from '@angular/core/testing';

import { CarService } from './car.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CarService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarService]
    });
  });

  it('should ...', inject([CarService], (service: CarService) => {
    expect(service).toBeTruthy();
  }));
});
