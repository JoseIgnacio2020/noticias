import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//Componentes
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { FormularioComponent } from '../app/components/formulario/formulario.component';
import { ListadoNoticiasComponent } from '../app/components/listado-noticias/listado-noticias.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
//Servicio
import { NoticiaService } from './services/noticia.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FormularioComponent, ListadoNoticiasComponent,
    SpinnerComponent, HttpClientModule],
  providers: [NoticiaService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaNoticias: any[] = [];
  loading = false;

  constructor(private _noticiaServive: NoticiaService) {

  }

  buscarNoticias(parametros: any) {
    this.loading = true;
    this.listaNoticias = [];

    setTimeout(() => {
      this._noticiaServive.getNoticias(parametros).subscribe(data => {
        this.loading = false;
        this.listaNoticias = data.articles;
      }, error => {
        console.log(error);
        this.loading = false;
      });

    }, 1000);

  }
}
