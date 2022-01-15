import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraDetailComponent } from './calculadora-detail.component';

describe('CalculadoraDetailComponent', () => {
  let component: CalculadoraDetailComponent;
  let fixture: ComponentFixture<CalculadoraDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
