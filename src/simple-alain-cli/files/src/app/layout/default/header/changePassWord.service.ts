import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePassWordService {

  constructor(private http: HttpClient) { }

  changePwd(data:any): Observable<any>{
    const url='/modifypwd';
    return this.http.put<any>(url,data);
  }

}
