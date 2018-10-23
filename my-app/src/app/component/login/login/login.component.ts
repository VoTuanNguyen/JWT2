import { Component, OnInit ,ViewEncapsulation  } from '@angular/core';
import {Router,ActivatedRoute, RoutesRecognized } from '@angular/router';
import {LoginModel} from '../../../model/login-model';
import {AuthService} from '../../../services/auth.service';
import {Message } from 'primeng/primeng';
import { ToastrService} from 'ngx-toastr';


var previous="";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})

//navigate main page here
export class LoginComponent implements OnInit {
login=false;
user : LoginModel=new LoginModel();
messages: Message[] = [];
loading = false;
error = '';
returnUrl: string;


  constructor(private route: ActivatedRoute,private router : Router,private authservice : AuthService,private toaster:ToastrService) { }
  
  ngOnInit() { 

    /* localStorage.removeItem('currentUser'); */
    // get return url from route parameters or default to '/'
 
    if (localStorage.getItem('jwtToken')!=null) {
      this.router.navigate(['/admin/dashboard']);
    
  }
  }
loginValidation()
{
  if(this.user.username==null)
{
  this.toaster.error("user Name is Empty!");
  return false;
}
if(this.user.password==null)
{
  this.toaster.error("Password is Empty!");
  return false;
}
return true;
}
//function for login Validation
onClickSubmit() {
  previous=sessionStorage.getItem("referrer");

if(this.loginValidation())
{

  this.loading=true;
  /* console.log(this.user.username);
 if (this.user.username=="systemadmin" && this.user.password=="admin123") {
  
     this.router.navigate(['app-visitor-menu'])
  } else {
     alert("Invalid Login");
     return false;
  }  
   */

  this.authservice.login(this.user)
  .subscribe(isLoggedIn => {
    if (isLoggedIn) {
      this.login=true;
      if(previous!=null&&previous.length>0)
      {
        window.location.href = previous;
      }
      else
      {
        sessionStorage.removeItem("logout");

      //  this.router.navigate(['/admin/dashboard']);
      window.location.href = "http://localhost:8080/admin/dashboard";
      }
  
    } else {
      this.loading=false;
      this.toaster.error("UserName And PassWord Not Correct!");
      this.login==false;
    }
});




  /*current used
      this.authservice.login(this.user)
   .subscribe(result=> {
      if (result === true) {
        // login successful
        this.router.navigate(['profile']);
     } else {
        // login failed
        this.error = 'Username or password is incorrect';
        this.loading = false;
      }
  }, error => {
  this.loading = false;
  this.error = error;
});  */
/*     this.authservice.login(this.user.username, this.user.password)
        .subscribe(resp => {
          localStorage.setItem('jwt', resp.headers.get('x-auth-token'));
            this.router.navigate(['/profile']);
        }, this.handleError); */
}}

}


