import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClase, IClases } from 'src/interfaces/IClases';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudClasesService {

  constructor(private httpclient : HttpClient) { }

  getClases(): Observable<IClases[]>{
    return this.httpclient.get<IClases[]>(`${environment.apiURL}/Clases`);
  }

  postClases(newClase: IClase): Observable<IClase>{
    return this.httpclient.post<IClase>(`${environment.apiURL}/Clases`, newClase);
  }
}
