import { ComponentFixture, TestBed } from '@angular/core/testing';

import { agregarlugarComponent } from './agregarlugar.component';

describe('agregarlugarComponent', () => {
  let component: agregarlugarComponent;
  let fixture: ComponentFixture<agregarlugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ agregarlugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(agregarlugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});