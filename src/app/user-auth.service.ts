import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) { }

  userAuth(data1, data2): Observable<any>{
    console.log('>>>>>>>>>>>>>', data1, data2);
    const url = `http://localhost:50456/api/LoginTables/?uname=${data1}&pwd=${data2}`;
    console.log('Api url', url);
    return this.http.get(url).pipe(
      map(response => {
        return <any> response;
      }),
    );

  }
}
