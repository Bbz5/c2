import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptionPorteurComponent } from './add-option-porteur.component';

describe('AddOptionPorteurComponent', () => {
  let component: AddOptionPorteurComponent;
  let fixture: ComponentFixture<AddOptionPorteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOptionPorteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOptionPorteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
