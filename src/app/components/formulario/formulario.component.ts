import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada = 'general';
  paisSeleccionado = 'us';

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertaiment', nombre: 'Entretenimiento'},
    {value: 'healt', nombre: 'Salud'},
    {value: 'sciense', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnología'}
  ]

  paises: any[] = [
    {value: 'us', nombre: 'Estados Unidos'},
    {value: 'in', nombre: 'India'},
    {value: 'jp', nombre: 'Japón'},
    {value: 'kr', nombre: 'Korea'},
    {value: 'nl', nombre: 'Países Bajos'},
    {value: 'ua', nombre: 'Ucrania'},
  ]

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS);
  }

}
