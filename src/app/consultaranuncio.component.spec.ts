import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaranuncioComponent } from './consultaranuncio.component';

describe('ConsultaranuncioComponent', () => {
  let component: ConsultaranuncioComponent;
  let fixture: ComponentFixture<ConsultaranuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaranuncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaranuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
