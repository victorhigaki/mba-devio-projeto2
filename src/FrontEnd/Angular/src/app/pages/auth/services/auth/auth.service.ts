import { inject, Injectable } from '@angular/core';
import { BaseService } from '../../../../services/base/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService extends BaseService {
  private _http = inject(HttpClient);

  login(request: {}): Observable<any> {
    return of();
  }

  teste(): Observable<any[]> {
    const url = `${this.baseUrl}/produtos`;
    return this._http.get<any[]>(url, this.GetHeaderJson());
  }
}
