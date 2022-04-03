import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  public indice!: number;
  public nome!: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { }

  onSubmit() {
    this.http.get<string>('api/Consulta', {
      params: {
        indice: this.indice.toString()
      }
    }).subscribe(result => {
      this.nome = result;
    }, error => console.error(error));
  }

}
