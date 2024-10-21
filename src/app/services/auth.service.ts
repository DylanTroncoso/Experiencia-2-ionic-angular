import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from 'src/interfaces/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }

  GetAllUsers(): Observable<users[]>{
    return this.httpclient.get<users[]>(`${environment.apiURL}/usuarios`);
  }

  GetUsersByUsername(usuario:any):Observable<users>{
    return this.httpclient.get<users>(`${environment.apiURL}/usuarios/?username=${usuario}`);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

}
