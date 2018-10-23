import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {AuthService} from '../../../services/auth.service';
import {AppComponent} from '../../../app.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router : Router,private authservice:AuthService) {    

  }
  logout():void {
     this.router.navigate(['']);
     sessionStorage.setItem("logout","true")
    this.authservice.logOut();

  }



  ngOnInit() {
  }

}
