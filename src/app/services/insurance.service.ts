import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';   // import
import { Observable } from 'rxjs';
import { Insurance } from '../models/Insurance';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http :HttpClient) { }

  public  getAllInsurances(page:number,size:number):Observable<any>{
    return this.http.get<Array<Insurance>>(environment.insurance_service +"insurrance?page="+page+"&size="+size)
  }

}
