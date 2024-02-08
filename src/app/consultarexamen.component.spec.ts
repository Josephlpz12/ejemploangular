import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarexamenComponent } from './consultarexamen.component';

describe('ConsultarexamenComponent', () => {
  let component: ConsultarexamenComponent;
  let fixture: ComponentFixture<ConsultarexamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarexamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
