import { Component, OnInit,NgModule, ViewChild } from '@angular/core';
import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable';
import { AppService } from '../../../../services/app.service';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { EmployeeModel } from '../../../../model/employee-model';
import { EmployeemasterComponent } from '../../employeemaster/employeemaster.component';
import { FormControl } from '@angular/forms';
import swal from 'sweetalert2';
@Component({
  selector: 'app-employeedatatable',
  templateUrl: './employeedatatable.component.html',
  styleUrls: ['./employeedatatable.component.css']
})

export class EmployeedatatableComponent implements OnInit 
{
 
  @ViewChild('myDataTable') myDataTable: jqxDataTableComponent;

  data ={};
  data1:EmployeeModel;
  source:any={};
  dataAdapter:any;
  columns:any[];
  rowIndex: number;  
  DataID:string;

  constructor(private appservice:AppService,private empmaster :EmployeemasterComponent) { }

  ngOnInit() 
  {
    this.appservice.getData_Service("getEmployeeDetail").then(data =>{
      this.data=JSON.stringify(data['data']);
    
      this.columns =
      [
        { text: 'Employee ID', dataField: 'emp_id', width: 120,cellsAlign: 'right', align: 'right' },
        { text: 'Name', dataField: 'emp_name', width: 120 },
        { text: 'Department id', dataField: 'dept_id', width: 300 },
        { text: 'Designation', dataField: 'emp_designation', width: 300 },
        { text: 'Qualification', dataField: 'emp_qualification' },
        { text: 'Email', dataField: 'emp_email' },
        { text: 'Address', dataField: 'emp_address' },
      ];


    this.source =
    {
      dataType: 'json',
      dataFields: [
          { name: 'emp_id', type: 'number' },
          { name: 'emp_name', type: 'string' },
          { name: 'dept_id', type: 'string' },
          { name: 'emp_designation', type: 'string' },
          { name: 'emp_qualification', type: 'string' },
          { name: 'emp_email', type: 'string' },
          { name: 'emp_address', type: 'string' },

        ],
        id: 'id',
        localdata:this.data
      };
    this.dataAdapter = new jqx.dataAdapter(this.source);
    })
  }
name:string;
  onRowSelect(event: any): void 
  {
    this.rowIndex = event.args.index;
    this.DataID=this.myDataTable.getCellValue(this.rowIndex,"emp_id")
    this.name=this.myDataTable.getCellValue(this.rowIndex,"emp_name");
  }

  editEmployee()
  {

 this.appservice.getData_UsingID_Serviceemp(this.DataID,"getEmpDetailsById").then(data =>{
      this.data1=data;
      this.empmaster.setformvalue(this.data1);


    }) 
  }


  deleteEmployee()
  {

    let formdata: FormData = new FormData();
    formdata.append('emp_id',this.DataID);
    swal({
      title: 'Are you sure?',
      text: "Do you want to delete "+this.name+"'s record",
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
        this.appservice.deleteData_UsingID_Service(formdata,"deleteEmployee").subscribe();
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
}
