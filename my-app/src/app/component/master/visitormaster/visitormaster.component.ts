import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ToastrService} from 'ngx-toastr';
import {AppService} from '../../../services/app.service';
import {VisitorModel} from '../../../model/visitorModel'; 
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { WebCamComponent } from 'ack-angular-webcam';
import { dataUriToBlob } from 'ack-angular-webcam/videoHelp';
import { jqxValidatorComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxvalidator';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxFileUploadComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxfileupload';
import { jqxDateTimeInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatetimeinput';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable';
import { jqxProgressBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxprogressbar';
import {VisitordatatableComponent} from '../visitormaster/visitordatatable/visitordatatable/visitordatatable.component';
@Component({
  selector: 'app-visitormaster',
  templateUrl: './visitormaster.component.html',
  styleUrls: ['./visitormaster.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class VisitormasterComponent  implements OnInit {


vdataedit:string=null;
  data =[][2];z
  employeename=[];
  dt;
  visitorId:string;
  employeeid=[];
  hid:any;
  vempid:string;
host_id :string;
vedit:string;
PhotoFileEdit:string;
//purpose of meeting Autocomplete
meeting: string[] = new Array("Interview","Personal Meeting","Official Meeting","Other Reason");
//Host Employee AutoComplete

  @ViewChild('myDataTable') myDataTable: jqxDataTableComponent;

@ViewChild('myValidator') myValidator: jqxValidatorComponent;
@ViewChild('v_host_id') v_hostid        : jqxInputComponent;
@ViewChild('v_hostemp_id') v_hostEmp_id : jqxInputComponent;

@ViewChild('v_id') v_id            :any;
@ViewChild('v_name') v_name        :jqxInputComponent;
@ViewChild('v_email') v_email      : jqxInputComponent;
@ViewChild('v_mobile') v_mobile    : jqxInputComponent;
@ViewChild('v_host_name') v_host_name :jqxInputComponent;
@ViewChild('v_host_id') v_host_id  : jqxInputComponent;
@ViewChild('v_purpose') v_purpose  : jqxInputComponent;
@ViewChild('v_date') v_date        : jqxDateTimeInputComponent;
@ViewChild('v_document') v_document: any;
@ViewChild('v_photo') v_photo      : any;
@ViewChild('v_gender1') v_gendercOMP1 : jqxRadioButtonComponent;
@ViewChild('v_gender2') v_gendercOMP2 : jqxRadioButtonComponent;
@ViewChild('f') formvalue : any;
@ViewChild('myProgressBar') myProgressBar: jqxProgressBarComponent;
@ViewChild('visitorImage') visitorimage :any;

  constructor(private appservice : AppService,private toaster: ToastrService){
        }
  selectedDocumentFiles: FileList
  selectphotofiles: File
  selectphotofilsupload:FileList
  currentdocumentupload : File
  currentphotoupload : File
  visitor : VisitorModel =new  VisitorModel();
  
  ngOnInit(){
    
      this.photofile1="assets/user.jpg";
    this.appservice.getData_Service("getEmployeeName").then(data =>{
      this.dt=JSON.stringify(data["data"]);
      this.data=JSON.parse(this.dt);
      console.clear();

      for(let i=0;i<this.data.length;i++)
      {
        this.employeename[i] = this.data[i]["emp_name"];
        this.employeeid[i]=this.data[i]["emp_id"];
    //    console.log(this.data[i]["emp_id"]);
   
  this.host_id=this.data[i]["emp_id"];

/*   HostEmp : String[] = new Array(this.data[i]["emp_name"]); */
}
this.v_hostid.source(this.employeename);
/* this.v_hostEmp_id.source(this.employeeid);  */



  
    });

  }
//employee id check employee id
checkempid(hostname : string){
  let flag:boolean=true;

  for(let i = 0;i<this.data.length;i++)
    {
    
      if(hostname==this.data[i]["emp_name"])
      {
   
        this.v_host_id=this.data[i]["emp_id"];
        this.vempid=this.data[i]["emp_id"];
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
      this.v_host_id.ngValue=""; 
      this.v_host_id.value(""); 
      return false;
    }

    return true;

}
//set HostName Value
setempvalue(id:string)
{
  for(let i = 0;i<this.data.length;i++)
  {
    if(id==this.data[i]["v_host_id"])
    {
      this.v_host_id.ngValue = this.data[i]["emp_id"];
      this.v_host_name.val(this.data[i]["emp_name"]);
      //this.Departmentid=;
      break;
    }
  }
}

setformdatavalue(tempdata:VisitorModel)
{
  this.vdataedit="true";
  this.vedit=tempdata.v_id;
  this.photofile1=tempdata.v_photo.substring(49);
  this.visitorId=tempdata.v_id;
  this.v_name.ngValue=tempdata.v_name;
  this.v_name.val(tempdata.v_name);
  this.v_email.ngValue=tempdata.v_email;
  this.v_email.val(tempdata.v_email);
  this.v_host_id.ngValue=tempdata.v_host_id;
  this.v_host_name=tempdata.v_host_name;
  this.v_host_id.val(tempdata.v_host_name);
  this.v_purpose.ngValue=tempdata.v_purpose;
  this.v_purpose.val(tempdata.v_purpose);
  this.v_date.ngValue=tempdata.v_date;
  this.v_date.val(tempdata.v_date);
  this.v_mobile.ngValue=tempdata.v_mobile;
  this.v_mobile.val(tempdata.v_mobile);
  this.v_document=tempdata.v_document;
  this.v_photo=this.PhotoFileEdit;

  if(tempdata.v_gender=="m")
  {
    this.v_gendercOMP1.checked(true); 
  }
  else if(tempdata.v_gender=="f")
  {
    this.v_gendercOMP2.checked(true); 
  }
  

}
 //set photo uploader
 selectphotoFile(event){
  this.selectphotofilsupload=event.target.files;
  

}

    //document Uploader
    selectdocumentFile(event) {
      this.selectedDocumentFiles=event.target.files;
      this.currentdocumentupload=this.selectedDocumentFiles.item(0);
    
    }


//form clear
clearForm(){
 
    this.clearAllField();
    this.formvalue.reset();
    this.toaster.success("Visitor Form SuccessFully  Clear All Field")
}
clearAllField(){
this.v_id="";
this.v_name.value("");
this.v_email.value("");
this.v_mobile.value("");
this.v_hostid.value("");
this.v_purpose.value("");
this.v_gendercOMP1.checked(false); 
this.v_gendercOMP2.checked(false);
/* this.v_photo.nativeElement.value="";
this.v_document.nativeElement.Value=""; */
this.v_date.val('');



}

   //Form Validation
   visitorValidate(){
    let vname :string =this.v_name.ngValue;
    let vemail : string =this.v_email.ngValue;
    let vmobile: string =this.v_mobile.ngValue;
    vmobile=this.v_mobile.val();
    let vhostname : string=this.v_hostid.ngValue;
    let vpurpose : string =this.v_purpose.ngValue;
    let vdate :string =this.v_date.ngValue;
    let vgender:string=this.visitor.v_gender;
/*     let vphtoto:string=this.selectphotofilsupload.item(0).name; */  

    if(vname.trim()=="")
    {
    
      this.toaster.error('Visitor Name is required', '', {
        timeOut: 3000,
      });
      return false;
    } 
    else if(vemail.trim()=="")
    {
    
      this.toaster.error('Visitor Email is required', '', {
        timeOut: 3000,
      });
      return false;
    }
    else if(!this.validateEmail(vemail)){
     
      this.toaster.error('Please Enter Valid Email', '', {
        timeOut: 3000,
      });
      return false;
    }
    else if(!this.validateMobile(vmobile))
    {
      
      this.toaster.error('Mobile Number is required', '', {
        timeOut: 3000,
      });

        return false;
    }
  
      
 

    
    else if(vhostname.trim()=="")
    {
      
      this.toaster.error('Host Employee Name is required', '', {
        timeOut: 3000,
      });
      return false;
    }
    else if(vpurpose.trim()=="")
    {
      
      this.toaster.error('Meeting purpose  is required', '', {
        timeOut: 3000,
      });
      return false;
    }
    else if(vdate.trim()=="")
    {
    
      this.toaster.error('Visiting date is required', '', {
        timeOut: 3000,
      });
      return false;
    }
   if(this.vdataedit!="true")
   {
     
   if(this.selectphotofiles!=undefined){
        
      this.currentphotoupload=this.selectphotofiles;
     
    }
    else if(this.selectphotofilsupload!=undefined)
    {
      this.currentphotoupload=this.selectphotofilsupload.item(0);
    
    }
    
      else{
        
      this.toaster.error('visitor Photo is required', '', {
        timeOut: 3000,
      });
          return false;
      }
      if(this.selectedDocumentFiles!=undefined)
      {
        this.currentdocumentupload=this.selectedDocumentFiles.item(0);
         }
         else{
                
      this.toaster.error('visitor documnet is required', '', {
        timeOut: 3000,
      });
                return false;
         }

      }    
if(vgender==undefined)
         {
           
           this.toaster.error('Gender is required', '', {
             timeOut: 3000,
           });
           return false;
         }
return true;
    

   } 


//Validation for File
/* valdationFile(file)
{
  var ext = file.substring(file.lastIndexOf('.') + 1);
  if (ext.toLowerCase() == 'png') {
      return true;
  }
  else if (ext.toLowerCase() == 'jpeg')
  {
      return true
  }
  else {
      return false;
  }
} */
   //ValidateMobile
   validateMobile(vmobile){
     var reg=/[0-9\+\-\ ]/;
     if(!reg.test(vmobile))
     {
       return false;
     }
     return true;
   }
   //Email Validation
   validateEmail(emailField){
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if (!reg.test(emailField)) 
    {
      return false;
    }
    return true;

}


    visitorsavedata(){
 if(!this.checkempid(this.visitor.v_host_id)){
  this.toaster.error("Host Employee name is invalid ")
  return false;
} 
// this.toasterService.hello(); */


   if(this.visitorValidate()){


    let formdata: FormData = new FormData();
    formdata.append("v_id",this.visitorId);
    formdata.append("v_document",   this.currentdocumentupload); 
    formdata.append("v_photo",this.currentphotoupload);
    formdata.append("v_name",this.visitor.v_name);
    formdata.append("v_email",this.visitor.v_email);
    formdata.append("v_host_id", this.vempid);
    formdata.append("v_purpose",this.visitor.v_purpose);
    formdata.append("v_date",this.visitor.v_date);
    formdata.append("v_mobile",this.visitor.v_mobile);
    formdata.append("v_gender",this.visitor.v_gender);
  
    this.appservice.saveData_Service_VisitorMST(formdata,"saveVisitorData").subscribe();
/*     this.clearAllField();
    this.formvalue.reset(); */
    this.toaster.info("Visitor Form SuccessFully  Save ")
    this.clearAllField();
    this.formvalue.reset();
   // window.location.reload();
   setTimeout( function(){ location.reload(); }, 1000);
 
     }
  else{
    console.log("error");
  } 

}
photofile1:any
webcam:WebCamComponent
base64

// genBase64(){
//   this.webcam.getBase64()
//   .then( base=> {
//     this.file1=base;
//   })
//   .catch( e=>console.error(e) )
// }
genBaseimg64(){
  this.visitorimage.getBase64().then(base=>{this.base64=base
  this.image2=new File([this.dataURItoBlob(base)],"image.png")
  this.photofile1=base;
  }).catch(e=>console.error(e))
}

//imageadd
genBase64(){
  this.webcam.getBase64()
  .then(base=>{this.base64=base
  this.image = new File([this.dataURItoBlob(base)],"image.png")
  this.photofile1=base;
  })
  .catch( e=>console.error(e) )
}
photofile:File;
image:File;
blob:Blob;
image2:File;
uploadphoto(){

//var blob = dataUriToBlob(this.file1)
//this.blob = new Blob(this.file1, {type: 'image/png'});
//this.image = new File([blob],"image.png")
/* if(this.image==undefined)
{

alert(this.visitorimage+""+this.image2); 

 
} */
let value = 0;
let interval = setInterval(_ => {
    value++;

    if (value == 100) {
        clearInterval(interval);
    }

    this.myProgressBar.val(value);
}, 20);

this.selectphotofiles=this.image;
 }

onCamError(err){}
onCamSuccess(e){
  
}
dataURItoBlob(dataURI) {
  var byteString = atob(dataURI.split(',')[1]);
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }
  var bb = new Blob([ab],{type:"image/png"});
  return bb;
}

}
