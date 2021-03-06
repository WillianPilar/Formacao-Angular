import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly ADICAO : string = '+';
  static readonly SUBTRACAO : string = '-';
  static readonly MULTIPLICACAO : string = '*';
  static readonly DIVISAO : string = '/'; 

  constructor() { }

  calcular( num1 : number, num2 : number, operacao : string ) : number{
    
    let resultado : number;

    console.log("SERVICE");

    switch(operacao){
      case CalculadoraService.ADICAO:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;     
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
    }

    console.log(resultado);

    return resultado;

  }
}
