import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PageViewedService {
  private clickUrl = 'https://localhost:1234/';
  private sessionId = sessionStorage.getItem('pageViewedSessionId');

  constructor(private http: HttpClient) {
    if (environment.pageViewedServiceUrl) {
      this.clickUrl = environment.pageViewedServiceUrl;
    }
    if (!this.sessionId) {
      this.sessionId = uuid();
      sessionStorage.setItem('pageViewedSessionId', this.sessionId);
    }
  }

  postView(customer: string, product: string, auth: boolean): Observable<any> {
    //if (!auth) {
    customer = this.sessionId;
    //}
    console.log('customer: ' + customer + ' product: ' + product + ' auth: ' + auth);
    let body = {
      productId: product,
      personId: customer,
      auth: auth ? 'yes' : 'no',
    };

    var response = this.http.post(this.clickUrl, body, httpOptions);
    console.log(`response = ${JSON.stringify(response)}`);
    return response;
  }
}
