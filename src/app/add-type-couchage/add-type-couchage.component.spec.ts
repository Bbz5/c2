import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeCouchageComponent } from './add-type-couchage.component';

describe('AddTypeCouchageComponent', () => {
  let component: AddTypeCouchageComponent;
  let fixture: ComponentFixture<AddTypeCouchageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeCouchageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeCouchageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
