import { AuthGuard } from './auth/auth.guard';
import { ChatviewComponent } from './chatview/chatview.component';
import { CodeEditorViewComponent } from './problemsView/code-editor-view/code-editor-view.component';
import { ProblemContentAddComponent } from './Admin/problems/problem-content-add/problem-content-add.component';
import { ProblemHeaderAddComponent } from './Admin/problems/problem-header-add/problem-header-add.component';
import { ProblemContentComponent } from './Admin/problems/problem-content/problem-content.component';
import { ProblemHeaderComponent } from './Admin/problems/problem-header/problem-header.component';
import { ProblemSourceComponent } from './Admin/problems/problem-source/problem-source.component';
import { ProblemTypeComponent } from './Admin/problems/problem-type/problem-type.component';
import { DashBoardComponent } from './Admin/dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import {Routes, RouterModule } from '@angular/router';
import { AccountLoginComponent } from './Account/account-login/account-login.component';

import { AccountRegisterComponent } from './Account/account-register/account-register.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { ProblemSourceAddComponent } from './Admin/problems/problem-source-add/problem-source-add.component';
import { ProblemTypeAddComponent } from './Admin/problems/problem-type-add/problem-type-add.component';
import { UsersComponent } from './Admin/users/users.component';
import { ProblemTypeViewComponent } from './problemsView/problem-type-view/problem-type-view.component';
import { ProblemHeaderViewComponent } from './problemsView/problem-header-view/problem-header-view.component';
import { ProblemContentViewComponent } from './problemsView/problem-content-view/problem-content-view.component';

const routes: Routes = [
{path: '', component: HomeComponent,pathMatch:'full'},
{path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
{path: 'login', component: AccountLoginComponent},
{path: 'register', component: AccountRegisterComponent},
//////Admin/////
{path: 'adminpanel', component: DashBoardComponent,canActivate:[AuthGuard]},

{path: 'users', component: UsersComponent,canActivate:[AuthGuard]},
{path: 'Adduser', component: AddUserComponent,canActivate:[AuthGuard]},
{path: 'edituser/:id', component: AddUserComponent,canActivate:[AuthGuard]},
//problems//
{path: 'probType', component: ProblemTypeComponent,canActivate:[AuthGuard]},
{path: 'AddprobType', component: ProblemTypeAddComponent,canActivate:[AuthGuard]},
{path: 'editprobType/:proptypeID', component: ProblemTypeAddComponent,canActivate:[AuthGuard]},
{path: 'probTypeView', component: ProblemTypeViewComponent,canActivate:[AuthGuard]},
{path: 'passSnSt/:sourceType/:sourceName', component: ProblemHeaderViewComponent,canActivate:[AuthGuard]},



{path: 'probSource', component: ProblemSourceComponent,canActivate:[AuthGuard]},
{path: 'AddprobSource', component: ProblemSourceAddComponent,canActivate:[AuthGuard]},
{path: 'editprobSource/:sourceId', component: ProblemSourceAddComponent,canActivate:[AuthGuard]},
{path: 'passSource/:source', component: ProblemTypeViewComponent,canActivate:[AuthGuard]},


{path: 'probHeader', component: ProblemHeaderComponent,canActivate:[AuthGuard]},
{path: 'AddprobHeader', component: ProblemHeaderAddComponent,canActivate:[AuthGuard]},
{path: 'probHeadView', component: ProblemHeaderViewComponent,canActivate:[AuthGuard]},


{path: 'probContent', component: ProblemContentComponent,canActivate:[AuthGuard]},
{path: 'AddprobContent', component: ProblemContentAddComponent,canActivate:[AuthGuard]},
{path: 'getContent/:ProblemName', component: ProblemContentViewComponent,canActivate:[AuthGuard]},

{path: 'getContentCode/:contentName/:headerName', component: CodeEditorViewComponent,canActivate:[AuthGuard]},
///////Homeee//////
{path: 'codeEditor', component: CodeEditorViewComponent,canActivate:[AuthGuard]},

{path: 'chatPage', component: ChatviewComponent,canActivate:[AuthGuard]},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
