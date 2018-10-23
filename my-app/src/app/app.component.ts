import { Component,OnInit,ViewContainerRef } from '@angular/core';
import {AppService} from '../app/services/app.service' ;
import {Router, NavigationEnd, RoutesRecognized} from '@angular/router'
import { Http } from '@angular/http';
import { WebCamComponent } from 'ack-angular-webcam';
import { AuthService } from './services/auth.service';
var logout="true";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent   implements OnInit {

    file1:any

    constructor(private  router:Router,private service:AppService,public http:Http,private auth:AuthService){
  
  
 
        this.router.events
    .filter(e => e instanceof RoutesRecognized)
    .pairwise()
    .subscribe((event: any[]) => {
        if(sessionStorage.getItem("logout")=="true")
        {
            sessionStorage.removeItem("referrer");
        }
        else
      sessionStorage.setItem("referrer",event[0].urlAfterRedirects);
    });

    }
    
    static main_url="http://localhost:8080/visitormanegement/" ;
    len:any
    getRouterUrl:any
    
    ngOnInit(){ 
     
    
    }
  

    
    webcam:WebCamComponent
    base64
    genBase64(){
      this.webcam.getBase64()
      .then( base=> {
        this.file1=base;
      })
      .catch( e=>console.error(e) )
    }
  
    onCamError(err){}
    onCamSuccess(e){
    }
}