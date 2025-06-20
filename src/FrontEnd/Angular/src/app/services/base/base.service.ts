import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export abstract class BaseService {
  constructor() {}

  protected baseUrl = environment.baseUrl + '/api';

  protected GetHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  protected GetAuthHeader() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.GetTokenUsuario()}`,
      }),
    };
  }

  protected GetAuthHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.GetTokenUsuario()}`,
      }),
    };
  }

  private GetTokenUsuario(): string | null {
    return localStorage.getItem('token');
  }
}
