import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraDetailComponent } from './components/calculadora-detail/calculadora-detail.component';

@NgModule({
  declarations: [CalculadoraDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraDetailComponent
  ]
})
export class CalculadoraModule { }
