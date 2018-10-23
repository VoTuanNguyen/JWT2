import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EmployeeModel } from '../../../model/employee-model';
import { jqxValidatorComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxvalidator';
import { AppService } from '../../../services/app.service';
import { HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox';
import { FormControl } from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { jqxFileUploadComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxfileupload';
import { EmployeedatatableComponent } from './employeedatatable/employeedatatable.component';
import { DataTable } from 'primeng/primeng';
var token = localStorage.getItem('jwtToken');
@Component({
  selector: 'app-employeemaster',
  templateUrl: './employeemaster.component.html',
  styleUrls: ['./employeemaster.component.css']
})

export class EmployeemasterComponent implements OnInit {
  @ViewChild('myValidator') myValidator: jqxValidatorComponent;
  
  @ViewChild('emp_name') emp_nameComp : jqxInputComponent;
  @ViewChild('emp_designation') emp_designationComp : jqxInputComponent;
  @ViewChild('emp_qualification') emp_qualificationComp : jqxInputComponent;
  @ViewChild('emp_mobile') emp_mobileComp : jqxInputComponent;
  @ViewChild('emp_email') emp_emailComp : jqxInputComponent;
  @ViewChild('dept_id') dept_idComp : jqxInputComponent;
  @ViewChild('emp_address') emp_addresscOMP : jqxTextAreaComponent; 
  @ViewChild('emp_gender1') emp_gendercOMP1 : jqxRadioButtonComponent;
  @ViewChild('emp_gender2') emp_gendercOMP2 : jqxRadioButtonComponent;
  @ViewChild('active') activeComp : jqxCheckBoxComponent;
  @ViewChild('emp_photo') emp_photoComp : any;
  @ViewChild('empimage') empimage : HTMLImageElement;
  @ViewChild('editphoto') editEmpphoto:any;
  @ViewChild('f') formvalue : any;
  emp : EmployeeModel = new EmployeeModel();
  selectedFiles: FileList
  currentFileUpload: File
  emp_name:string=''
  empid : string
  dt;
  data1=[][2];
  department=[];
  checkdeptidflag :boolean=false;
  Departmentid :string;
  editempphoto:string;
  empedit:string=null;

  constructor(private http: HttpClient,private appservice:AppService,private toaster: ToastrService) { }

  selectFile(event) 
  {
    this.selectedFiles = event.target.files;
  }

  ngOnInit() {
    this.appservice.getData_Service("getDepartmentDetail").then(data=>{
      this.dt=JSON.stringify(data["data"]);
      this.data1=JSON.parse(this.dt);
      console.clear();

      for(let i=0;i<this.data1.length;i++)
      {
        this.department[i] = this.data1[i]["dept_name"];

      }
      this.dept_idComp.source(this.department);
    });
  }
  
  checkdeptid(Deptname:string)
  {
    let flag:boolean=true;
    for(let i = 0;i<this.data1.length;i++)
    {
      if(this.dept_idComp.ngValue==this.data1[i]["dept_name"])
      {
        this.Departmentid=this.data1[i]["dept_id"];
        flag=true;
        break;
      }
      else
      {
        flag=false;
      }
    }
    if(!flag)
    {
      this.dept_idComp.ngValue=""; 
      this.dept_idComp.value(""); 
      return false;
    }
    return true;
  }

  setdepartmentvalue(id:string)
  {
    for(let i = 0;i<this.data1.length;i++)
    {
      if(id==this.data1[i]["dept_id"])
      {
        this.dept_idComp.ngValue = this.data1[i]["dept_name"];
        this.dept_idComp.val(this.data1[i]["dept_name"]);
        //this.Departmentid=;
        break;
      }
    }
  }

  

  onClickSubmit() 
  {  
  
    if(!this.checkdeptid(this.emp.dept_id))
    {

      this.toaster.error('Invalied Department Name', '', {
        timeOut: 3000,
      });


      return false;
    }

      if(this.empedit!="true")
      {
      
     if(this.selectedFiles != undefined)
    {
      this.currentFileUpload = this.selectedFiles.item(0);
      //this.selectedFiles= null;
    }
    else
    {
    
    this.toaster.error('Employee Photo required', '', {
        timeOut: 3000, 
      });

      return false;
    } 
  }
    if(this.isvalidateform())
    {
      /* if(this.myValidator.validate(document.getElementById('form')))
      { */

        let formdata: FormData = new FormData();
        formdata.append('emp_id',this.empid);
        formdata.append('emp_name',this.emp.emp_name);
        formdata.append('emp_designation',this.emp.emp_designation);
        formdata.append('emp_qualification',this.emp.emp_qualification);
        formdata.append('emp_mobile',this.emp.emp_mobile);
        formdata.append('emp_email',this.emp.emp_email);
        formdata.append('dept_id',this.Departmentid);
        formdata.append('emp_address',this.emp.emp_address);
        formdata.append('emp_gender',this.emp.emp_gender);
        formdata.append('active',this.emp.active);
        if(this.selectedFiles != undefined)
        {
          console.log("inside save");
        formdata.append('emp_photo', this.currentFileUpload);
        }
        else
        { 
          console.log("inside Edit");
            formdata.append('emp_photo', this.editEmpphoto);
        }
        
      
        const req = new HttpRequest('POST', 'http://localhost:8080/visitormanegement/admin/saveEmployeeDetail', formdata,  {headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))});

        this.http.request(req).subscribe();
        /* console.log(JSON.stringify(this.emp));
        this.appservice.saveData_Service(JSON.stringify(this.emp),"saveEmployeeDetail").subscribe(); */

        this.clearallfield();  
        this.formvalue.reset(); 
        this.toaster.info("Employee Form is successfully submitted");
        setTimeout( function(){ location.reload(); }, 1000);

    }
    else
    {
      console.log("error");
    }
    }
       
    
    
    //this.emp["emp_photo"] = this.selectedFiles.item(0);
    
    
  
  
  cancel()
  {
    this.clearallfield();
    this.formvalue.reset();
    this.toaster.success("Employee Form SuccessFully Clear");
  }

  clearallfield()
  {
    this.empid="";
    this.emp_nameComp.value("") ;
    this.emp_addresscOMP.val('');
    this.emp_designationComp.value("");
    this.emp_emailComp.value("");
    this.emp_mobileComp.value("");
    this.emp_qualificationComp.value("");
    this.dept_idComp.value("");
    this.emp_gendercOMP1.checked(false); 
    this.emp_gendercOMP2.checked(false);
    this.activeComp.checked(false);   
    this.emp_photoComp.nativeElement.value="";
  }

  setformvalue(tempdata:EmployeeModel)
  {
    this.empedit="true";
    this.editempphoto=tempdata.emp_photo.substring(49);
    this.empimage.src=tempdata.emp_photo;
    this.empid = tempdata.emp_id;
    this.emp.emp_id = tempdata.emp_id;
    this.emp_nameComp.ngValue = tempdata.emp_name ;
    this.emp_nameComp.val(tempdata.emp_name);
    this.emp_designationComp.ngValue=tempdata.emp_designation;
    this.emp_designationComp.val(tempdata.emp_designation);
    this.emp_emailComp.ngValue = tempdata.emp_email;
    this.emp_emailComp.val(tempdata.emp_email);
    this.emp_mobileComp.ngValue = tempdata.emp_mobile;
    this.emp_mobileComp.val(tempdata.emp_mobile);
    this.emp_qualificationComp.ngValue = tempdata.emp_qualification;
    this.emp_qualificationComp.val(tempdata.emp_qualification);
    this.Departmentid = tempdata.dept_id;
    this.setdepartmentvalue(this.Departmentid);    
    
    this.emp_addresscOMP.val(tempdata.emp_address);
    
    if(tempdata.emp_gender=="M")
    {
      this.emp_gendercOMP1.checked(true);
    }
    else if(tempdata.emp_gender=="F")
    {
      this.emp_gendercOMP2.checked(true);
    }
    


    if(tempdata.active=="1")
    {
      this.activeComp.checked(true);
    }
    else
    {
      this.activeComp.checked(false);
    }
  }


  isvalidateform()
  {
    let ename:string = this.emp_nameComp.ngValue;
    let edesignation:string = this.emp_designationComp.ngValue;
    let equalification:string = this.emp_qualificationComp.ngValue;
    let emobile:string = this.emp_mobileComp.ngValue;
    emobile=this.emp_mobileComp.val();
    let eemail:string = this.emp_emailComp.ngValue;
    let edepartment:string = this.dept_idComp.ngValue;
    let eaddress:string = this.emp_addresscOMP.val();
    let egender:string = this.emp.emp_gender;
    
   
    if(ename.trim()=="")
    {
      this.toaster.error('Employee Name is required', '', {
        timeOut: 3000,
      });
      return false;
    }
    else if(edesignation.trim()=="")
    {
      this.toaster.error('Employee Designation is  required', '', {
        timeOut: 3000,
      });

      return false;
    }
    else if(equalification.trim()=="")
    {
      this.toaster.error('Employee Qualification required', '', {
        timeOut: 3000,
      });
      return false;
    }
    else if(!this.validateMobile(emobile))
    {
      this.toaster.error('Employee Mobile Number is required', '', {
        timeOut: 3000,
      });
      return false;
    }
    else if(eemail.trim()=="")
    {
      this.toaster.error('Employee Email is required', '', {
        timeOut: 3000,
      });


      return false;
    }
    else if(edepartment.trim()=="")
    {
      this.toaster.error('Employee Department is required', '', {
        timeOut: 3000,
      });

      return false;
    }
    else if(eaddress.trim()=="")
    {
      this.toaster.error('Employee Address is required', '', {
        timeOut: 3000,
      });

      return false;
    }
    else if(egender==undefined)
    {
      this.toaster.error('gender is  required', '', {
        timeOut: 3000,
      });
      return false;
    }
    else if(!this.validateEmail(eemail))
    {
      this.toaster.error('Please Enter Valid Email', '', {
        timeOut: 3000,
      });
 return false;
    }
    return true;
  }


    //ValidateMobile
    validateMobile(emobile){
      var reg=/[0-9\+\-\ ]/;
      if(!reg.test(emobile))
      {
        return false;
      }
      return true;
    } 
//valid Email
  validateEmail(emailField){
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if (!reg.test(emailField)) 
    {
      return false;
    }
    return true;

}


}