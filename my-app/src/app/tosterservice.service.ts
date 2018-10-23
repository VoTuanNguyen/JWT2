import { Injectable,  ViewContainerRef  } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { ToastsManager } from 'ng2-toastr';
@Injectable()
export class Toasterservice {

	constructor(private toastr: ToastsManager, 
		private _vcr: ViewContainerRef,){
            this.toastr.setRootViewContainerRef(_vcr);
        } 
    
	

  Success(title:string,message?:string)
  {
    this.toastr.success(title,message);


  }
  Error(title:string,message?:string)
  {
    this.toastr.error(title,message);
  } 

  
}
