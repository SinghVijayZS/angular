import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string ;
  constructor(private httpClient : HttpClient) { 
    this.url = environment.API_URL;
  }

  get(endpoint : string) : Observable<any>{
    return this.httpClient.get(`${this.url}/${endpoint}`)
  }

  put(endpoint : string, data : any) : Observable<any>{
    return this.httpClient.put(`${this.url}/${endpoint}`,data);
  }

  post(endpoint : string, data : any) : Observable<any>{
    return this.httpClient.post(`${this.url}/${endpoint}`,data);
  }

  delete(endpoint : string, data : any) : Observable<any>{
    return this.httpClient.delete(`${this.url}/${endpoint}`);
  }

}
