import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild, OnInit } from '@angular/core';
import {jqxDataTableComponent} from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable';
import { AppComponent } from './app.component';
import { VisitormasterComponent } from './component/master/visitormaster/visitormaster.component';
import { EmployeemasterComponent } from './component/master/employeemaster/employeemaster.component';
import { DepartmentmasterComponent } from './component/master/departmentmaster/departmentmaster.component';
import { DepartmentdatatableComponent } from './component/master/departmentmaster/departmentdatatable/departmentdatatable.component';
import { AppRoutingModule } from '../app/app-routing.module'
import { MenuComponent } from './component/common/menu/menu.component';
import { jqxMenuComponent} from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu';
import {jqxMaskedInputComponent} from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxmaskedinput';
import { AdminPanelComponent } from './component/admin/admin-panel/admin-panel.component';
import { DashboardComponent} from '../app/component/admin/dashboard/dashboard.component';
import { jqxButtonComponent} from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { AppService} from '../app/services/app.service';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WebCamModule } from 'ack-angular-webcam';
import { EmployeedatatableComponent } from './component/master/employeemaster/employeedatatable/employeedatatable.component';
import { FormsModule } from '@angular/forms';
import { jqxInputComponent } from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxFileUploadComponent } from  '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxfileupload';
import { jqxTextAreaComponent } from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea';
import { jqxRadioButtonComponent } from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton';
import { jqxCheckBoxComponent } from  '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox';
import { jqxValidatorComponent } from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxvalidator';
import {Toasterservice} from '../app/tosterservice.service';
import { ToastrModule } from 'ngx-toastr';
import {ToastOptions} from 'ng2-toastr';
import {jqxProgressBarComponent} from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxprogressbar';
import {AuthModule} from './auth.modules';
    
// visitor

 import {jqxDateTimeInputComponent} from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxdatetimeinput';
import { VisitordatatableComponent } from './component/master/visitormaster/visitordatatable/visitordatatable/visitordatatable.component';


@NgModule({
  declarations: [
      AppComponent, 
      VisitormasterComponent, 
      EmployeemasterComponent, 
      DepartmentmasterComponent,
      DashboardComponent, 
      MenuComponent,
      jqxMenuComponent,
      AdminPanelComponent,
      jqxDataTableComponent,
      jqxButtonComponent,
      jqxDateTimeInputComponent,
      EmployeedatatableComponent,
      DepartmentdatatableComponent,
      // empoyee

      jqxInputComponent,
      jqxFileUploadComponent,
      jqxTextAreaComponent,
      jqxRadioButtonComponent,
      jqxButtonComponent,
      jqxCheckBoxComponent,
      jqxValidatorComponent,
      VisitordatatableComponent,
      jqxMaskedInputComponent,
      jqxProgressBarComponent

    

  ],
  imports: [
    WebCamModule,
    BrowserModule,
    FormsModule,
    AuthModule,
    AppRoutingModule,  
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  
    

  
    BrowserAnimationsModule,
  ],
  providers: [AppService,Toasterservice,ToastOptions],
  bootstrap: [AppComponent]
})
export class AppModule extends ToastOptions{

  animate = 'flyRight'; // you can override any options available
  newestOnTop = true;
  showCloseButton = true;
}