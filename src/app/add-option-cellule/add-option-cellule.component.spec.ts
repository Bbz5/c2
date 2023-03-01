import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptionCelluleComponent } from './add-option-cellule.component';

describe('AddOptionCelluleComponent', () => {
  let component: AddOptionCelluleComponent;
  let fixture: ComponentFixture<AddOptionCelluleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOptionCelluleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOptionCelluleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
