import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountLoginComponent } from './Account/account-login/account-login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AccountRegisterComponent } from './Account/account-register/account-register.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './Account/forgot-password/forgot-password.component';
import { DashBoardComponent } from './Admin/dash-board/dash-board.component';
import { UsersComponent } from './Admin/users/users.component';

import { AgGridModule } from 'ag-grid-angular';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { ProblemSourceComponent } from './Admin/problems/problem-source/problem-source.component';
import { ProblemTypeComponent } from './Admin/problems/problem-type/problem-type.component';
import { ProblemHeaderComponent } from './Admin/problems/problem-header/problem-header.component';
import { ProblemContentComponent } from './Admin/problems/problem-content/problem-content.component';
import { ProblemSourceAddComponent } from './Admin/problems/problem-source-add/problem-source-add.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProblemTypeAddComponent } from './Admin/problems/problem-type-add/problem-type-add.component';
import { ProblemHeaderAddComponent } from './Admin/problems/problem-header-add/problem-header-add.component';
import { ProblemContentAddComponent } from './Admin/problems/problem-content-add/problem-content-add.component';
import { ProblemTypeViewComponent } from './problemsView/problem-type-view/problem-type-view.component';
import { ProblemHeaderViewComponent } from './problemsView/problem-header-view/problem-header-view.component';
import { ProblemContentViewComponent } from './problemsView/problem-content-view/problem-content-view.component';
import { CodeEditorViewComponent } from './problemsView/code-editor-view/code-editor-view.component';

import { AceEditorModule } from 'ng2-ace-editor';
import { ChatviewComponent } from './chatview/chatview.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { VerifyComponent } from './verify/verify.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountLoginComponent,
    HomeComponent,
    AccountRegisterComponent,
    FooterComponent,
    ForgotPasswordComponent,
    DashBoardComponent,
    UsersComponent,
    AddUserComponent,
    ProblemSourceComponent,
    ProblemTypeComponent,
    ProblemHeaderComponent,
    ProblemContentComponent,
    ProblemSourceAddComponent,
    ProblemTypeAddComponent,
    ProblemHeaderAddComponent,
    ProblemContentAddComponent,
    ProblemTypeViewComponent,
    ProblemHeaderViewComponent,
    ProblemContentViewComponent,
    CodeEditorViewComponent,
    ChatviewComponent,
    SideBarComponent,
    FirstPageComponent,
    VerifyComponent,
 
  ],
  imports: [
    AgGridModule.withComponents([]),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger'
    }),
    ServiceWorkerModule.register('service-worker.js', { enabled: environment.production }),
    AceEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
