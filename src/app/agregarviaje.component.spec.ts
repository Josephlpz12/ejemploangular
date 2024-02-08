import { ComponentFixture, TestBed } from '@angular/core/testing';

import { agregarviajeComponent } from './agregarviaje.component';

describe('agregarviajeComponent', () => {
  let component: agregarviajeComponent;
  let fixture: ComponentFixture<agregarviajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ agregarviajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(agregarviajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});