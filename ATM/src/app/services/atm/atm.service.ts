import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atm } from './model/atm';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  private url: string = 'http://localhost:3100/api/atm';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Atm[]> {
    return this.httpClient.get<Atm[]>(this.url);
  }

  getById(id: number): Observable<Atm> {
    return this.httpClient.get<Atm>(`${this.url}/${id}`);
  }

  save(Atm: Atm): Observable<Atm> {
    if (Atm.id) {
      return this.httpClient.put<Atm>(`${this.url}/${Atm.id}`, Atm);
    }
    else {
      return this.httpClient.post<Atm>(`${this.url}`, Atm);
    }
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${id}`);
  }
}
