import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ListemployeComponent } from './components/listemploye/listemploye.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilemployeComponent } from './components/profilemploye/profilemploye.component';



const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'forget',component:ForgetpasswordComponent},
    {path:'reset/:resettoken',component:ResetpasswordComponent},
  { path: 'home', component: HomeComponent,children:[
    {path:'',component:LayoutComponent},
    {path:'listemploye',component:ListemployeComponent},
    {path:'profile',component:ProfilemployeComponent}


  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
