import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../../services/calculadora.service';

@Component({
  selector: 'app-calculadora-detail',
  templateUrl: './calculadora-detail.component.html',
  styleUrls: ['./calculadora-detail.component.css']
})
export class CalculadoraDetailComponent implements OnInit {

  constructor( private calculadoraService : CalculadoraService ) { }

  ngOnInit(): void {
  
  }

}
