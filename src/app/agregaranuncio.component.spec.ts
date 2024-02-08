import { ComponentFixture, TestBed } from '@angular/core/testing';

import { agregaranuncioComponent } from './agregaranuncio.component';

describe('agregaranuncioComponent', () => {
  let component: agregaranuncioComponent;
  let fixture: ComponentFixture<agregaranuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ agregaranuncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(agregaranuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});