import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlumnos, IAlumno } from 'src/interfaces/IAlumnos';

@Injectable({
  providedIn: 'root'
})
export class CrudAlumnosService {

  constructor(private httpclient: HttpClient ) { }

  getAlumnos(): Observable<IAlumnos[]>{
    return this.httpclient.get<IAlumnos[]>('${environment.apiURL}/alumnos');
  }

  postAlumnos(newAlumno: IAlumno): Observable<IAlumno>{
    return this.httpclient.post<IAlumno>('${environment.apiURL}/alumnos', newAlumno);
  }
  
  
}

