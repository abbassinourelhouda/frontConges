import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {RouterLinkWithHref} from "@angular/router";
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './approuting.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ListemployeComponent } from './components/listemploye/listemploye.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilemployeComponent } from './components/profilemploye/profilemploye.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    LayoutComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    ListemployeComponent,
    RegisterComponent,
    ProfilemployeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterLinkWithHref,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
