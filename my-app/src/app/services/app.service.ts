import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {AppComponent} from '../app.component'
import "rxjs/Rx";
import { promise } from 'selenium-webdriver';
import { EmployeeModel } from '../model/employee-model';
import { VisitorModel } from '../model/visitorModel';
import { AuthService } from './auth.service';
import { RequestOptions, Headers, Http } from '@angular/http';

// App Service for Angular 4
var token = localStorage.getItem('jwtToken');
var jwtToken;
let httpOptions;
@Injectable()
export class AppService {

  

app_service_url=AppComponent.main_url+"admin/";
  constructor(private http:HttpClient,private auth:AuthService){}
 ;

  // Retrive Json Data from Server Side  
  getData_Service(servicename:string){
   return this.http.get(this.app_service_url+servicename)
    .toPromise().catch(this.handleError);
  }
  // SaveData  First Set Data In Model and Send model object in url 
/*   saveData_Service(object: Object,servicename:string):Observable<Object>{
    return this.http.post(this.app_service_url+servicename,object)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  } */
  saveData_Service(object: Object,servicename:string):Observable<Object>{
    return this.http.post(this.app_service_url+servicename,object,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))})
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }
// Delete Data Using Particular ID
deleteData_UsingID_ServiceGET(id:string,methodname:string): Promise<Object> {
  return this.http.get(this.app_service_url+methodname+"/"+id,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))}).toPromise()
    .catch(this.handleError);
    
}
  saveData_ServiceVisitor(object: FormData,servicename:string):Observable<Object>{
    return this.http.post(this.app_service_url+servicename,object,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))})
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }
 // Retrive Json Data Using Particular ID
 getData_UsingID_Servicedashboard(id:string,servicename:string):Promise<Object>{
  return this.http.get(this.app_service_url+servicename+"?id="+id,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))})
  .toPromise().catch(this.handleError);
}

  // Retrive Json Data Using Particular ID
  getData_UsingID_Service(id:string,servicename:string):Promise<Object>{
    return this.http.get(this.app_service_url+servicename+"/"+id,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))})
    .toPromise().catch(this.handleError);
 
  }
  getData_UsingID_Serviceemp(id:string,servicename:string):Promise<EmployeeModel>{
    return this.http.get(this.app_service_url+servicename+"/"+id,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))})
    .toPromise().catch(this.handleError);
  }

  getData_UsingID_Service_EmployeeMST(id:string,servicename:string):Promise<EmployeeModel>{
    
    return this.http.get(this.app_service_url+servicename+"/"+id,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))})
    .toPromise().catch(this.handleError);
  }

  getData_UsingID_Service_VisitorMST(id :String,methodname:string):Promise<VisitorModel>{
 
    return this.http.get(this.app_service_url+methodname+"/"+id,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))})
    .toPromise().catch(this.handleError);
  }
 
  saveData_Service_VisitorMST(formdata: FormData,servicename:string):Observable<Object>{
    
    return this.http.post(this.app_service_url+servicename,formdata,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))})
    .catch((error:any) => Observable.throw(error.json() || 'Server error')
    );
   
  }


// Delete Data Using Particular ID
  deleteData_UsingID_Serviceget(id:string,methodname:string): Promise<Object> {
    return this.http.get(this.app_service_url+methodname+"/"+id,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))}).toPromise()
      .catch(this.handleError);
      
  }
  // Delete Data Using Particular ID
  deleteData_UsingID_Service(object: FormData,methodname:string): Observable<Object> {
    return this.http.post(this.app_service_url+methodname,object,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))})
    .catch((error:any) => Observable.throw(error || 'Server error'));
      
  }

//checkin and  chekout method
Ischeckout=false
checkinAndout(object:FormData,methodname:string):Observable<any>
{

  return this.http.post(this.app_service_url+methodname,object,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))})
  /* .map(checkoutTime=>{
    alert(JSON.stringify(checkoutTime['checkoutTime'][0]));

  }) */
    .catch((error:any) => Observable.throw(error || 'Server error')); 
}
/*   getUrl_Service(servicename:string){
  
    return this.http.get("/admin"+servicename,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))})
   .toPromise().catch(this.handleError);
 }
 */

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
