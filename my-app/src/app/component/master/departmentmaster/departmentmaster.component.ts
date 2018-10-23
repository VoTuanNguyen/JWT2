import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { jqxValidatorComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxvalidator';
import { AppService } from '../../../services/app.service';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox';
import { FormControl } from '@angular/forms';
import { DepartmentModel } from '../../../model/department-model';
import { ToastrService} from 'ngx-toastr';
import { DepartmentdatatableComponent } from '../departmentmaster/departmentdatatable/departmentdatatable.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-departmentmaster',
  templateUrl: './departmentmaster.component.html',
  styleUrls: ['./departmentmaster.component.css']
})
export class DepartmentmasterComponent implements OnInit {
  @ViewChild('dept_id') dept_idComp : any;
  @ViewChild('dept_name') dept_nameComp : jqxInputComponent;
  @ViewChild('dept_location') dept_locationComp : jqxInputComponent;
  @ViewChild('f') formvalue : any;

  dept : DepartmentModel = new DepartmentModel();
  deptid:string;
  constructor(private http: HttpClient,private appservice:AppService,private toaster: ToastrService,private router:Router) { }

  deptdatatable:DepartmentdatatableComponent;


  ngOnInit() {

    
   
  }

  onClickSubmit()
  {
    if(this.validateform())
    {
      let formdata: FormData = new FormData();
      formdata.append('dept_id',this.deptid);
      formdata.append('dept_name',this.dept.dept_name);
      formdata.append('dept_location',this.dept.dept_location);
      console.log(this.dept); 
      this.appservice.saveData_ServiceVisitor(formdata,"saveDepartmentDetail").subscribe(); 
      this.clearallfield(); 
      this.toaster.info("Department Data Save ");
      setTimeout( function(){ location.reload(); }, 1000);
    }
    
  }

  setformvalue(temp:DepartmentModel)
  {
    console.log("from form : "+temp);

    this.dept_nameComp.ngValue = temp.dept_name;
    this.dept_nameComp.value(temp.dept_name);
    this.dept_locationComp.ngValue = temp.dept_location;
    this.dept_locationComp.value(temp.dept_location);
    this.dept.dept_id = temp.dept_id;
    this.deptid = temp.dept_id; 
  }


  cancel()
  {
    this.clearallfield();
    this.toaster.success("Your Form is SuccessFully Clear");
  }

  clearallfield()
  {
    this.deptid="";
    this.dept_locationComp.value("");
    this.dept_nameComp.value("");
    this.formvalue.reset();
  
  }

  validateform()
  {
    let deptname:string = this.dept_nameComp.ngValue;
    let deptlocation : string = this.dept_locationComp.ngValue;

    if(deptname.trim()=="")
    {
      this.toaster.error('Department Name is Required', '', {
        timeOut: 3000,
      });
      return false;
    }
    else if(deptlocation.trim()=="")
    {
      this.toaster.error('department Location is required', '', {
        timeOut: 3000,
      });
      return false;
    }
    return true;
  }
}
