import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: '', component: ParentComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      { path: 'register', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
