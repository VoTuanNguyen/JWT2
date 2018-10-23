import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';



import {TabViewModule} from 'primeng/components/tabview/tabview';
import {ButtonModule} from 'primeng/components/button/button';

import { AuthService} from "./services/auth.service";
import { AuthGuard} from "./services/auth-guard.service"
import {GrowlModule} from 'primeng/components/growl/growl';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './component/login/login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        TabViewModule,
        ButtonModule,
        GrowlModule
    ],
    providers: [AuthService, AuthGuard],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class AuthModule {
}
