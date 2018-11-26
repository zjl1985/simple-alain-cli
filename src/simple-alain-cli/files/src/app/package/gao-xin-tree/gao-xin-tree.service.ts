import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GaoXinTreeService {

  constructor(private http: HttpClient) {
  }

  getProcessUnitTreeData(url): Promise<any> {
    return this.http.get(url).toPromise();
  }

}
