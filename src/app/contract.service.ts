import { Reply } from './new-contract/new-contract.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {}

  createContract(payload): Observable<Reply> {
    // console.log('service');
    // console.log(payload);
    return this.http.post<Reply>('http://localhost:8080/api/contract' , payload);
  }
}
