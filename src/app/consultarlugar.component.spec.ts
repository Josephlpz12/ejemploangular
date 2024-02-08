import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarlugarComponent } from './consultarlugar.component';

describe('ConsultarlugarComponent', () => {
  let component: ConsultarlugarComponent;
  let fixture: ComponentFixture<ConsultarlugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarlugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarlugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});