import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarqueVehiculeComponent } from './add-marque-vehicule.component';

describe('AddMarqueVehiculeComponent', () => {
  let component: AddMarqueVehiculeComponent;
  let fixture: ComponentFixture<AddMarqueVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarqueVehiculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMarqueVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
