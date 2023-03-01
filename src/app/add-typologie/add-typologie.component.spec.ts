import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypologieComponent } from './add-typologie.component';

describe('AddTypologieComponent', () => {
  let component: AddTypologieComponent;
  let fixture: ComponentFixture<AddTypologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypologieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
