import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports[FormsModule];
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  public numero2:number;
  public numero1:number;
  public resultado:number | undefined ;
  public calcular:number;
  constructor(){
    this.numero1 = 0;
    this.numero2 = 0;
  }
  calcular(){
    this.resultado = this.numero1 + this.numero2;

  }

}
