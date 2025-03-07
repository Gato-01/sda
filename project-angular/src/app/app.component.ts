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
  title = 'project-angular';

  numero: number | null = null;
  inicio: number | null = null;
  fin: number | null = null;
  numerosPares: number[] = [];
  numerosImpares: number[] = [];

  mostrarParesImpares() {
    if (this.inicio !== null && this.fin !== null) {
      this.numerosPares = [];
      this.numerosImpares = [];
      for (let i = this.inicio; i <= this.fin; i++) {
        if (i % 2 === 0) {
          this.numerosPares.push(i);
        } else {
          this.numerosImpares.push(i);
        }}}}}
		

