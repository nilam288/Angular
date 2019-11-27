import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
// Import Observable from rxjs/Observable
import { Observable } from 'rxjs';
// Import the map operator
//import 'rxjs/add/operator/map';

/*
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/

@Injectable()
export class UserService {

 // constructor(private http: HttpClient) {}

  myheaders: Headers;
    // Inject Angular http service
    constructor(private http: HttpClient) {
        this.myheaders =  new Headers();

        this.myheaders.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    }

  private userUrl = 'http://localhost:8080/SpringAngular/users';


  public getUsers() {
    return this.http.get(this.userUrl);
  }
  /*
  // Notice the method return type is Observable<IClient[]>
    getClient(): Observable<User[]> {
    // To convert Observable<Response> to Observable<IClient[]>
    // we are using the map operator
    return this.http.get('http://localhost:8080/SpringAngular/users')
        .map((response: Response) => <User[]>response.json());
}
*/
  public deleteUser(user) {
    return this.http.delete(this.userUrl + '/' + user.id);
  }

  public createUser(user) {
    return this.http.post(this.userUrl, user);
  }

}
