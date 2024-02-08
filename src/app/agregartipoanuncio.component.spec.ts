import { ComponentFixture, TestBed } from '@angular/core/testing';

import { agregartipoanuncioComponent } from './agregartipoanuncio.component';

describe('agregartipoanuncioComponent', () => {
  let component: agregartipoanuncioComponent;
  let fixture: ComponentFixture<agregartipoanuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ agregartipoanuncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(agregartipoanuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});