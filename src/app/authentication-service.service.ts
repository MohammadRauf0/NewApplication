import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(
    private httpClient: HttpClient
  ) {}

  onLogin(obj: any){
    return this.httpClient.post('https://trainapi.caretta.net/api/auth/login', obj);
  }
}
