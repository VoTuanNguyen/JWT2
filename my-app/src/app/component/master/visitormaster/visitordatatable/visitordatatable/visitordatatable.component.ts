import { Component, OnInit, NgModule, ViewChild,AfterViewInit } from '@angular/core';
import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable';
import {AppService} from '../../../../../services/app.service';
import {Router} from '@angular/router'
import { EmployeeModel } from '../../../../../model/employee-model';
import {VisitormasterComponent} from '../../visitormaster.component';
import { VisitorModel } from '../../../../../model/visitorModel';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import swal from 'sweetalert2';
@Component({
  selector: 'app-visitordatatable',
  templateUrl: './visitordatatable.component.html',
  styleUrls: ['./visitordatatable.component.css']
})
export class VisitordatatableComponent implements  AfterViewInit  {


  constructor(private appservice:AppService,private router:Router,private visitormaster:VisitormasterComponent){}
  @ViewChild('myDataTable') myDataTable: jqxDataTableComponent;

  
  

  data ={};
  dt:any;
  data1:VisitorModel;
  source:any={};
  dataAdapter:any;
  columns:any[];
  rowIndex: number;
  ngAfterViewInit(){
    this.myDataTable.refresh();
    this.appservice.getData_Service("getVisitorDetail").then(data =>{
    
      this.data=JSON.stringify(data['data']);
      this.columns =
      [
          { text: 'Visitor ID', dataField: 'v_id', width: 120,cellsAlign: 'right', align: 'right' },
      /*     { text: 'Host ID', dataField: 'emp_id', width: 120 }, */
          { text: 'Visitor Name', dataField: 'v_name', width: 300 },
          { text: 'Host Name', dataField: 'emp_name', width: 300 },
          { text: 'Purpose of Meeting', dataField: 'v_pupose' },
          { text: 'Visitor Mobile', dataField: 'v_mobile' },
          { text: 'Visitor Email', dataField: 'v_email' },
          { text: 'Visitor Date', dataField: 'v_date' }
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
            { name: 'v_mobile', type: 'string' },
            { name: 'v_email', type: 'string' },
            { name: 'v_date', type: 'string' },
          //  { name: 'action', type: "string" },    
        ],
        id: 'id',
        localdata:this.data
    };
    this.dataAdapter = new jqx.dataAdapter(this.source);
    })
  }

name:string;
VisitorID:string;
onRowSelect(event: any): void {
  this.rowIndex = event.args.index;
  this.VisitorID=this.myDataTable.getCellValue(this.rowIndex,"v_id")
  this.name=this.myDataTable.getCellValue(this.rowIndex,"v_name");
}
deleteVisitor(){

  let formdata: FormData = new FormData();
  formdata.append("v_id",this.VisitorID);
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
      this.appservice.deleteData_UsingID_Service(formdata,"vdeletebyId").subscribe();
      this.myDataTable.deleteRow(this.rowIndex);
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


editVisitor(){
/*   let formdata: FormData = new FormData();
  formdata.append("v_id",this.VisitorID); */


  this.appservice. getData_UsingID_Service_VisitorMST(this.VisitorID,"editdatabyId").then(data=>{
    this.data1=JSON.parse(JSON.stringify(data["data"][0]));
    this.visitormaster.setformdatavalue(this.data1);

 
  //this.myDataTable.refresh()z;



  


 /* "<img width='200'heigth='200' src=''/>"; */
/*   console.log(JSON.stringify(data["data"][0]['v_photo'])); 
    console.log(JSON.stringify(data["data"][0]['v_document'])); */
  });
/*  */
}

}
