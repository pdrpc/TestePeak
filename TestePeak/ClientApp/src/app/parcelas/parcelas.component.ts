import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-parcelas',
  templateUrl: './parcelas.component.html',
  styleUrls: ['./parcelas.component.css']
})
export class ParcelasComponent  {
  public total: number;
  public valor: number;
  public parcelas: number;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { }

  onSubmit() {
    this.http.post<any>('api/Parcelas/Calculo', null, {
      params: {
        valor: this.valor.toString(),
        parcelas: this.parcelas.toString()
      }
    }).subscribe(result => {
      console.log(result);
      this.total = result;
    }, error => console.error(error));
  }

}
