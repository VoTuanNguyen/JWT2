import { Component, OnInit, NgModule, ViewChild ,AfterViewInit} from '@angular/core';
import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable';
import {AppService} from '../../../services/app.service';
import {Router} from '@angular/router'
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { ToastrService} from 'ngx-toastr';
import swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  /*  template: `
  <jqxDataTable #myDataTable 
      [source]="dataAdapter" [columns]="columns"  [width]="'97%'" [theme]='"black"'>
  </jqxDataTable>
`  */
})

export class DashboardComponent implements OnInit,AfterViewInit  {
  constructor(private appservice:AppService,private router:Router,private toaster:ToastrService){}
  @ViewChild('myDataTable') myDataTable: jqxDataTableComponent;
  @ViewChild('printvisitor') printvisitor: jqxButtonComponent;
  @ViewChild('deletevisitor') deletevisitor: jqxButtonComponent;
  @ViewChild('checkin') checkin : jqxButtonComponent;
  @ViewChild('checkout') checkout : jqxButtonComponent;




  data ={};
  source:any={};
  dataAdapter:any;
  columns:any[];
  rowIndex: number;
  photostring:string;

  ngOnInit(){
    
  }

  ngAfterViewInit(){
    this.appservice.getData_Service("getVisitorDetail").then(data =>{
      this.data=JSON.stringify(data['data']);

      this.columns =
      [
        
          { text: 'Visitor ID', dataField: 'v_id', width: 120,cellsAlign: 'right', align: 'right' },
   /*        { text: 'Host ID', dataField: 'emp_id', width: 120 }, */
          { text: 'Visitor Name', dataField: 'v_name', width: 300 },
          { text: 'Host Name', dataField: 'emp_name', width: 300 },
          { text: 'Purpose', dataField: 'v_pupose' },
          { text: 'DepartMent', dataField: 'dept_name' },
          { text: 'Visitor Date', dataField: 'v_date' },
          { text: 'CheckIn Time', dataField: 'v_timeIn' },
          { text: 'CheckOut Time', dataField: 'v_timeOut' },
         // { text: 'Action', dataField: 'action', width: 150}
      ];
    this.source =
    {
        dataType: 'json',
    
        dataFields: [
            { name: 'v_id', type: 'number' },
            { name: 'emp_id', type: 'number' },
            { name: 'v_name', type: 'string' },
            { name: 'emp_name', type: 'string' },
            { name: 'v_pupose', type: 'string' },
            { name: 'dept_name', type: 'string' },
            { name: 'v_date', type: 'string' },
            { name: 'v_timeIn', type: 'string' },
            { name: 'v_timeOut', type: 'string' },
          //  { name: 'action', type: "string" },    
        ],
        id: 'id',
        localdata:this.data
    };
    this.dataAdapter = new jqx.dataAdapter(this.source);
    })
  }


excelExport(): void {
    this.myDataTable.exportData('xls');
};

  ooonclick(id:string){
    this.appservice.deleteData_UsingID_ServiceGET(id,"deleteVisitorDetail")
  this.ngOnInit();
}
name:string;
deleteV:string;
onRowSelect(event: any): void {
  this.rowIndex = event.args.index;
  this.printvisitor.disabled(false); 
  this.deletevisitor.disabled(false); 
  this.checkin.disabled(false);
  this.checkout.disabled(false);
  this.deleteV=this.myDataTable.getCellValue(this.rowIndex,"v_id")
  this.name=this.myDataTable.getCellValue(this.rowIndex,"v_name");
}

checkIn()
{
  let formdata: FormData = new FormData();
  formdata.append('v_id',this.deleteV);
  formdata.append('flag','checkin');
  this.appservice.checkinAndout(formdata,"checkinAndout").subscribe(isCheckOut=>{

  if(isCheckOut.toString()=='false'&&isCheckOut==false)
  {
   
    this.toaster.info("if you chekout than checkIn is not possible.Re-Schedule Visit Again!");
    this.checkin.disabled(true);
    this.checkout.disabled(true);
    return false;
  }
  else
  {
    setTimeout( function(){ location.reload(); }, 1000);
  }

    
  });

}
checkOut()
{

  let formdata: FormData = new FormData();
  formdata.append('v_id',this.deleteV);
  formdata.append('flag','checkout');
  this.appservice.checkinAndout(formdata,"checkinAndout").subscribe(isCheckOut=>{
    if(isCheckOut.toString()=='false'&&isCheckOut==false)
    {
      this.toaster.info("if you chekout than again checkOut is not possible..!");
    this.checkin.disabled(true);
    this.checkout.disabled(true);
    return false;
    }
  else
    {
      
      setTimeout( function(){ location.reload(); }, 1000);

    }

   });


}
deleteVisitor(){
  swal({
    title: 'Are you sure?',
    text: "Do you want to delete "+this.name+"'s  record",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ff6060',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: false,
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      if(null!=this.deleteV && this.deleteV!=undefined){
        console.log("delate : "+this.deleteV);
        let formdata: FormData = new FormData();
        formdata.append('v_id',this.deleteV);
        this.appservice.deleteData_UsingID_Service(formdata,"deleteVisitorDetail").subscribe();
        this.myDataTable.deleteRow(this.rowIndex);
     
       }
      swal(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } else if (
      // Read more about handling dismissals
      result.dismiss === swal.DismissReason.cancel
    ) {
      
    }
  })




}


printpdf(){

/*   setTimeout(()=>{    //<<<---    using ()=> syntax

},15000);
 */
if(null!=this.deleteV && this.deleteV!=undefined && this.deleteV!=''){
    this.appservice.getData_UsingID_Servicedashboard(this.deleteV,"getVisitordatabyid").then(data =>{
      var getdata = JSON.stringify(data["data"]);
      this.printVisitorDetail(JSON.parse(getdata)[0]["v_id"],JSON.parse(getdata)[0]["v_name"],JSON.parse(getdata)[0]["emp_name"],JSON.parse(getdata)[0]["v_pupose"],JSON.parse(getdata)[0]["dept_name"],JSON.parse(getdata)[0]["v_photo"].substring(49),JSON.parse(getdata)[0]["v_date"]);

    });
;
  }

}



printVisitorDetail(vid,vname,empname,purpose,dept,vphoto,vdate){

 this.photostring=vphoto.replace(new RegExp(/\\/g),"\\");
this.photostring="/"+this.photostring;

  console.log(this.photostring);
 let newWindow = window.open('', '', 'width=800, height=500'),
  document = newWindow.document.open(), 
  pageContent = 
    ' <html> '+
    ' <head> '+
    '      <meta charset="utf-8"> '+
    '     <title></title>'+
    '<style type="text/css">body {-webkit-print-color-adjust: exact; font-family: Arial; }</style>' +

    '</head> '+
    ' <body style ="-webkit-print-color-adjust:exact;">'+

    '<div style="background-color: #ffffff; border:black; border-style: double; width:400px;padding-right:10px; margin-right: 10px;border-radius: 10px" >'+
    '<table style="table-layout: fixed; width: 100%"> '+
    '<tr>'+
    '    <td rowspan="2"><img  src="/assets/Efive/login_logo.png" width="100px" height="50px" ></td>'+
    '    <td width="5%"></td>'+
    '    <td colspan="2" style="text-align: center;background: #e2ccd1">visitor pass</td>'+
    '</tr>'+
    '<tr>'+
    '    <td width="5%"></td>'+
    '    <td style="background:#dcdee2">Pass no</td>'+
    '    <td style="background:#e0decc">'+vid+'</td>'+
    '</tr>'+
    '<tr>'+
    //'    <td rowspan="5"> <img  src="'+vphoto+'" height="50px" onload=\"javascript:window.print();\"></td>'+
    '    <td rowspan="5"><img   src="'+this.photostring+'" width="100px" height="100px" onload=\"javascript:window.print();\"></td>'+
    '    <td width="5%"></td>'+
    '    <td style="background:#efefef">V_Name</td>'+
    '    <td style="background:#e0dede">'+vname+'</td>'+
    '</tr>'+
    '<tr>'+
    '    <td width="5%"></td>'+
    '    <td style="background:#dcdee2">Host_Name</td>'+
    '    <td style="background:#e0decc">'+empname+'</td>'+
    '</tr>'+

    '<tr>'+
    '    <td width="5%"></td>'+
    '    <td style="background:#efefef">V_DATE</td>'+
    '    <td style="background:#e0dede">'+vdate+'</td>'+
    '</tr>'+

    '<tr>'+
    '    <td width="5%"></td>'+
    '    <td style="background:#dcdee2">Dept.</td>'+
    '    <td style="background:#e0decc">'+dept+'</td>'+
    '</tr>'+

    '<tr>'+
    '    <td width="5%"></td>'+
    '    <td style="background:#efefef">Purpose</td>'+
    '    <td style="background:#e0dede">'+purpose+'</td>'+
    '</tr>'+
    '</table>'+
    '</div>'+

    
    ' </body> '+ 
    ' </html> ';

    document.write(pageContent);
    document.close();
   // newWindow.print(); 


};
}

