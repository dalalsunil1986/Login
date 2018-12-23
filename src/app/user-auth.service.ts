import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) { }

  userAuth(data1, data2): Observable<any>{
    console.log('>>>>>>>>>>>>>', data1, data2);
    const url = `http://localhost:54745/api/LoginTables/?nam=${data1}&pwd1=${data2}`;
   // http://localhost:54745/api/LoginTables?nam=admin&pwd1=admin
    console.log('Api url', url);
    return this.http.get(url)
    .pipe(
        map(response => {
          return response;
      }),
      catchError(this.handleError)
    );

  }

  userManagement(){
    console.log('usermanagment function');
    const usermanagUrl = 'http://localhost:50011/api/UserManagementTables';
    console.log('usermanagement api', usermanagUrl);
    return this.http.get(usermanagUrl)
    .pipe(
      map(response => {
        return response;
      }),
     catchError(this.handleError)
    );
  }
}
