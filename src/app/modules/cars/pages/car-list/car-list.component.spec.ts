import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListComponent } from './car-list.component';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car.model';
import { By } from '@angular/platform-browser';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarListComponent],
      imports: [HttpClientModule],
      providers: [CarService]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;

    for (let i = 1; i < 3; i++) {
      const actor: Car = {
        id: faker.number.int(),
        marca: faker.lorem.sentence(3),
        linea: faker.lorem.sentence(3),
        referencia: faker.lorem.sentence(3),
        modelo: faker.number.int(),
        kilometraje: faker.number.int(),
        color: faker.lorem.sentence(3),
        imagen: faker.image.url()
      }
      component.cars.push(actor);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <tr> elements', () => {
    const elements = debug.queryAll(By.css('tr'));
    expect(elements.length).toBe(3);
  });
});
