import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router'
import { LoginComponent } from './component/login/login/login.component';
import { VisitormasterComponent } from './component/master/visitormaster/visitormaster.component';
import { EmployeemasterComponent } from './component/master/employeemaster/employeemaster.component';
import { DepartmentmasterComponent } from './component/master/departmentmaster/departmentmaster.component';
import { AdminPanelComponent } from './component/admin/admin-panel/admin-panel.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import {AuthGuard as authGuard} from './services/auth-guard.service';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminPanelComponent,children:[
    { path: 'dashboard', component: DashboardComponent,canActivate:[authGuard] },
    { path: 'visitor', component: VisitormasterComponent,canActivate:[authGuard] },
    { path: 'employee', component: EmployeemasterComponent,canActivate:[authGuard] },
    { path: 'department', component: DepartmentmasterComponent,canActivate:[authGuard] },

  ] }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
