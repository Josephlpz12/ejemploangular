import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarviajeComponent } from './consultarviaje.component';

describe('ConsultarviajeComponent', () => {
  let component: ConsultarviajeComponent;
  let fixture: ComponentFixture<ConsultarviajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarviajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarviajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
