import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../dialog/company';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8081/api/v1';

  public addCompany(companyData: any) {
    return this.http.post(this.API + '/addCompany', companyData);
  }

  public getAllCompany():Observable<Array<Company>>{
    return this.http.get<Array<Company>>(this.API + '/getAllCompanies');
  }
}
