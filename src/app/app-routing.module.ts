import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsergroupsComponent } from './admin/user-groups/usergroups.component';
import { UserComponent } from './admin/user/user.component';
import { LoginComponent } from './login/login.component';
import { BallComponent } from './sports/ball/ball.component';

const routes: Routes = [

  {path : 'login', component: LoginComponent},
  {path : 'user', component: UserComponent},
  {path : 'usergroup', component: UsergroupsComponent},
  {path : 'ball', component: BallComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
