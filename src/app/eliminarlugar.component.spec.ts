import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eliminarlugarComponent } from './eliminarlugar.component';

describe('eliminarlugarComponent', () => {
  let component: eliminarlugarComponent;
  let fixture: ComponentFixture<eliminarlugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ eliminarlugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(eliminarlugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
