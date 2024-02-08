import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eliminaranuncioComponent } from './eliminaranuncio.component';

describe('eliminaranuncioComponent', () => {
  let component: eliminaranuncioComponent;
  let fixture: ComponentFixture<eliminaranuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ eliminaranuncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(eliminaranuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
