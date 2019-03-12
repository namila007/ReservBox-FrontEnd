import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {}

  createContract(payload) {
    // console.log('service');
    // console.log(payload);
    return this.http.post('http://localhost:8080/api/contract' , payload);
  }
}
