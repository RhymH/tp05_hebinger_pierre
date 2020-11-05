import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client: Observable<Client>;

  constructor(private http: HttpClient) {  }

  public postClient(client :Client): Observable<Client> {
    this.client = this.http.post<Client>('http://localhost/addClient', client);
    return this.client;
  }


}
