import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';
import { endpoints } from '../../../../environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private httpClient = inject(HttpClient);

  getCars(): Observable <Car[]> {
    return this.httpClient.get<Car[]>(endpoints.cars.getCars);
  }
}
