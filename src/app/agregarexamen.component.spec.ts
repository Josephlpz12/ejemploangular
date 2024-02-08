import { ComponentFixture, TestBed } from '@angular/core/testing';

import { agregarexamenComponent } from './agregarexamen.component';

describe('agregarexamenComponent', () => {
  let component: agregarexamenComponent;
  let fixture: ComponentFixture<agregarexamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ agregarexamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(agregarexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});