import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  search(adults,start,end):Observable<Object>{
    let param ={
      adults: adults,
      startDate:start,
      endDate: end
      }
      console.log(param);
    const url = 'http://localhost:8080/api/search';
     return this.http.get<any>(url, {params: param});
  }

}
