import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { complemento } from '../models/pettition.model';

@Injectable({
  providedIn: 'root',
})
export class PetitionsService {
  public url: string = '';
  constructor(private http: HttpClient) { }

  get urlBase() {
    return this.url;
  }

  set urlBase(value: string) {
    this.url = value;
  }

  public petitionPost(
    body: any,
  ): Observable<object> {
    this.urlBase = `${environment.urlBase}${complemento.crear}`;
    return this.pettition(body);
  }
  public petitionPut(
    body: any,
  ): Observable<object> {
    this.urlBase = `${environment.urlBase}${complemento.actualizar}`;
    return this.pettitionPut(body);
  }

  public petitionDelete(
    id: any,
  ): Observable<object> {
    this.urlBase = `${environment.urlBase}${complemento.eliminar}${id}`;
    return this.pettitionDelete();
  }

  public petitionGet(
  ): Observable<object> {
    this.urlBase = `${environment.urlBase}${complemento.traerTodas}`;
    return this.pettitionGet();
  }


  // Metodos privados si se cambian las peticiones
  private pettitionPut(body: any): Observable<object> {
    return this.http.put(this.urlBase, body).pipe(map((response: any) => { return response[1] }));
  }
  private pettition(body: any): Observable<object> {
    return this.http.post(this.urlBase, body).pipe(map((response: any) => { return response[1] }));
  }
  private pettitionDelete(): Observable<object> {
    return this.http.delete(this.urlBase).pipe(map((response: any) => { return response[1] }));
  }
  private pettitionGet(): Observable<object> {
    return this.http.get(this.urlBase);
  }
}
