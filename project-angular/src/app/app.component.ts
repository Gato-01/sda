import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Verificador de Números';
  
  // Propiedades para la verificación de un solo número
  numero: number | null = null;
  
  // Propiedades para el rango de números
  inicio: number | null = null;
  fin: number | null = null;
  numerosPares: number[] = [];
  numerosImpares: number[] = [];
  errorRango: string | null = null;

  /**
   * Inicializa el componente
   */
  ngOnInit(): void {
    // Inicialización si es necesaria
  }

  /**
   * Genera y clasifica los números pares e impares dentro del rango especificado
   * Valida que el rango sea válido antes de procesar
   */
  mostrarParesImpares(): void {
    // Validación de entrada
    if (this.inicio === null || this.fin === null) {
      this.errorRango = 'Por favor, introduce valores válidos para inicio y fin.';
      return;
    }
    
    if (this.inicio > this.fin) {
      this.errorRango = 'El valor de inicio debe ser menor o igual que el valor de fin.';
      return;
    }
    
    // Limpia el error si todo está bien
    this.errorRango = null;
    
    // Reinicia las listas
    this.numerosPares = [];
    this.numerosImpares = [];
    
    // Clasifica los números
    for (let i = this.inicio; i <= this.fin; i++) {
      if (i % 2 === 0) {
        this.numerosPares.push(i);
      } else {
        this.numerosImpares.push(i);
      }
    }
  }

  /**
   * Verifica si un número es par
   * @param num Número a verificar
   * @returns true si es par, false si es impar
   */
  esPar(num: number): boolean {
    return num % 2 === 0;
  }

  /**
   * Limpia todos los campos y resultados
   */
  limpiar(): void {
    this.numero = null;
    this.inicio = null;
    this.fin = null;
    this.numerosPares = [];
    this.numerosImpares = [];
    this.errorRango = null;
  }
}
		

