import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-parcela',
  templateUrl: './parcela.component.html',
  styleUrls: ['./parcela.component.css']
})
export class ParcelaComponent {
  public total!: number;
  public valor!: number;
  public juros!: number;
  public parcelas!: number;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { }

  onSubmit() {
    this.http.post<any>('api/Parcelas/Calculo', null, {
      params: {
        valor: this.valor.toString(),
        parcelas: this.parcelas.toString(),
        juros: this.juros.toString()
      }
    }).subscribe(result => {
      console.log(result);
      this.total = result;
    }, error => console.error(error));
  }

}
