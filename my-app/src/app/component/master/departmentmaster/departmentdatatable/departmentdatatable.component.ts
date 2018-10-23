import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable';
import { Jsonp } from '@angular/http';
import { DepartmentmasterComponent } from '../departmentmaster.component';
import { DepartmentModel } from '../../../../model/department-model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-departmentdatatable',
  templateUrl: './departmentdatatable.component.html',
  styleUrls: ['./departmentdatatable.component.css']
})
export class DepartmentdatatableComponent implements OnInit {

  @ViewChild('myDataTable') myDataTable: jqxDataTableComponent;
  dtmodel : DepartmentModel = new  DepartmentModel();
  data ={};
  dt;
  data1=[][2];
  source:any={};
  dataAdapter:any;
  columns:any[];
  rowIndex: number;  
  DataID:string;
  constructor(private appservice:AppService,private deptcomponent:DepartmentmasterComponent) { }

  ngOnInit() 
  {
    this.appservice.getData_Service("getDepartmentDetail").then(data =>{
      this.data=JSON.stringify(data['data']);
    
      this.columns =
      [
        { text: 'Departmet ID', dataField: 'dept_id', width: 120,cellsAlign: 'right', align: 'right' },
        { text: 'Department Name', dataField: 'dept_name', width: 120 },
        { text: 'Department Location', dataField: 'dept_location', width: 300 }
      ];


    this.source =
    {
      dataType: 'json',
      dataFields: [
          { name: 'dept_id', type: 'number' },
          { name: 'dept_name', type: 'string' },
          { name: 'dept_location', type: 'string' }
        ],
        id: 'id',
        localdata:this.data
      };
    this.dataAdapter = new jqx.dataAdapter(this.source);
    })
  }

deptName:string;
  onRowSelect(event: any): void 
  {
    this.rowIndex = event.args.index;
    this.DataID=this.myDataTable.getCellValue(this.rowIndex,"dept_id")
    this.deptName=this.myDataTable.getCellValue(this.rowIndex,"dept_name");
  }


  editDepartment()
  {
    console.log("edit : "+this.DataID);
    this.appservice.getData_UsingID_Service(this.DataID,"getDepartmentDetailById").then(data=>{
      this.dt=JSON.stringify(data["data"]);
      this.data1=JSON.parse(this.dt);
      console.clear();
      console.log("dept name : "+this.data1[0]["dept_name"]);
      console.log("depat id : "+this.data1[0]["dept_id"]);
      console.log("dept_location : "+this.data1[0]["dept_location"]);

      this.dtmodel.dept_id = this.data1[0]["dept_id"];
      this.dtmodel.dept_name = this.data1[0]["dept_name"];
      this.dtmodel.dept_location = this.data1[0]["dept_location"];
      console.log(this.dtmodel);
      this.deptcomponent.setformvalue(this.dtmodel);
    });
  }


  deleteDepartment()
  {
    let formdata: FormData = new FormData();
    formdata.append('dept_id',this.DataID);
    swal({
      title: 'Are you sure?',
      text: "Do you want to delete "+this.deptName+"'s  department",
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
        this.appservice.deleteData_UsingID_Service(formdata,"deleteDepartment").subscribe();
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
