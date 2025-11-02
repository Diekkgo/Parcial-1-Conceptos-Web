import { Component, inject, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent implements OnInit {

  private carService = inject(CarService);

  cars: Car[] = [];
  contactInfo = 'Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo'
  renaultCount = 0;
  chevroletCount = 0;
  nissanCount = 0;

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe({
      next: (response) => {
        this.cars = response
        this.countCars();
      },
      error: (error) => console.error('Ha ocurrido un error: ', error)
    })
  }

  countCars() {
    this.cars.forEach(car => {
      if (car.marca === 'Renault') {
        this.renaultCount++;
      } else if (car.marca === 'Chevrolet') {
        this.chevroletCount++;
      } else {
        this.nissanCount++;
      }
    })
  }

}
