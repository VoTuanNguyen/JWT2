import { Injectable, ViewChild } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
/* import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http'; */
import { Headers, Http ,RequestOptions,Response } from '@angular/http';
import {LoginModel} from "../model/login-model";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {AppComponent} from "../app.component";
import { Base64 } from 'js-base64';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { promise } from 'protractor';
/* const httpOptions ={
  headers: new HttpHeaders({ 'Content-Type': 'aplication/X-www-form=urlencoded','Access-Control-Allow-Origin':'*' })
};
 */
@Injectable()
export class AuthService {
   jwtToken:string=null;
  username:string=null;
 urls:string;
 private headers = new Headers({'Content-Type': 'application/json'});
 isLoggedIn = false;
   constructor(private http: Http) {
   }

 creds: String;
 private static handleError(error: any) {
  const errorMessage = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : `Server error`;
  console.log(errorMessage);
  return Observable.throw(errorMessage);
}
loginuser:LoginModel=new LoginModel();
login(user: LoginModel): Observable<boolean> {
  return this.http.post('http://localhost:8080/login', user)
  .map(response => response.json())
  .map((data:String) => {


    if(JSON.stringify(data)!="false"){

      this.jwtToken=JSON.stringify(data['data'][0]);
      this.username=JSON.stringify(data['data'][1]);
   
  
      if (this.jwtToken!=null&&this.username!=null) {
      
        this.isLoggedIn = true;

          localStorage.setItem('jwtToken', this.jwtToken);
          return true;
      } else {
          this.isLoggedIn = false;
          return false;
      }  }
  })
  .catch(AuthService.handleError);
}
/* logout(): void {
  // clear token remove user from local storage to log user out
  localStorage.removeItem('jwtToken');
  localStorage.clear();

} */


logOut(): Observable<boolean> {
  this.isLoggedIn = !this.isLoggedIn;
localStorage.removeItem('jwtToken'); 
localStorage.removeItem("referrer");
sessionStorage.removeItem("referrer");
  return Observable.of(false);


} 





/*
current
this.http.post(AppComponent.API_URL+'account/login', loginuser, { headers: headers }) 

 
  constructor(private http:Http,private router: Router) { }
   public login(loginuser:LoginModel):Observable<boolean> {
   let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    return this.http.post(AppComponent.API_URL+'account/login', loginuser, {headers: headers})
            .map((response: Response) => {

              console.log("resp==="+JSON.stringify(response));
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
               

                if (token) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: loginuser.username, token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });               }
 
    getToken(): String {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser && currentUser.token;
      return token ? token : "";
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    isLoggedIn(): boolean {
      var token: String = this.getToken();
      return token && token.length > 0;
    } */

}
