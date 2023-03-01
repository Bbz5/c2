import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptionGeneralsComponent } from './add-option-generals.component';

describe('AddOptionGeneralsComponent', () => {
  let component: AddOptionGeneralsComponent;
  let fixture: ComponentFixture<AddOptionGeneralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOptionGeneralsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOptionGeneralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
