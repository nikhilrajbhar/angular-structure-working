import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient
  ) { }

  randomCall(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  spinnerTest() {
    return of({name:'nikhil2'}).pipe(delay(3000));
  }
}
