import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../../services/calculadora.service';

@Component({
  selector: 'app-calculadora-detail',
  templateUrl: './calculadora-detail.component.html',
  styleUrls: ['./calculadora-detail.component.css']
})
export class CalculadoraDetailComponent implements OnInit {

  private numero1 : string;
  private numero2 : string;
  private operacao : string;
  private resultado : number;

  public display2 : string;

  constructor( private calculadoraService : CalculadoraService ) { }

  ngOnInit(): void {
    this.limpar();
  }

  limpar() : void {
    this.numero1 = null;
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
    this.display();
  }

  adicionarNumero( numero : string ){
    if( this.operacao === null ){
      this.numero1 = this.concatenarNumero(this.numero1, numero);
      console.log(this.numero1);
    }else{
      this.numero2 = this.concatenarNumero(this.numero2, numero);
      console.log(this.numero2);
    }
    this.display();
  }

  concatenarNumero(numAtual: string, numConcat: string) : string{
    
    // caso contenha apenas '0' ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null) {
  	  numAtual = '';
  	}

    // primeiro dígito é '.', concatena '0' antes do ponto
  	if (numConcat === '.' && numAtual === '') {
  	  return '0.';
  	}

    // caso '.' digitado e já contenha um '.', apenas retorna
  	if (numConcat === '.' && numAtual.indexOf('.') > -1) {
  	  return numAtual;
  	}

  	return numAtual + numConcat;

  }

  definirOperacao(operacao: string): void {
    // apenas define a operação caso não exista uma
  	if (this.operacao === null) {
      this.operacao = operacao;
      this.display();
  	}

    /* caso operação definida e número 2 selecionado,
       efetua o cálculo da operação */
  	if (this.numero2 !== null) {
  		this.resultado = this.calculadoraService.calcular(
  			parseFloat(this.numero1), 
  			parseFloat(this.numero2), 
  			this.operacao);
  		this.operacao = operacao;
  		this.numero1 = this.resultado.toString();
  		this.numero2 = null;
  		this.resultado = null;
      this.display();
      
  	}
  }

  calcular(): void {
  	if (this.numero2 === null) {
      this.display();
  	}

  	this.resultado = this.calculadoraService.calcular(
  		parseFloat(this.numero1), 
  		parseFloat(this.numero2), 
  		this.operacao);
    
    this.operacao = null;
    this.numero1 = null;
    this.numero2 = null;
    this.display();
  }

  display() : void {

    if (this.resultado !== null) {
      console.log("RESULTADO: ", this.resultado);
      this.display2 = this.resultado.toString();
      return;
    }
    if (this.numero2 !== null) {
      this.display2 = this.numero2;
      return;
    }
    this.display2 = this.numero1;

  }

}
