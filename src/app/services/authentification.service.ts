import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  token = localStorage.getItem("token")!
  headersoption = new HttpHeaders({
    Authorization: 'Bearer ' + this.token
  })
  constructor(private http:HttpClient) { }

  signin(loginrequest:any){
      return this.http.post(`${environment.baseurl}/api/auth/signin`,loginrequest)
    }
    signup(registerrequest:any){
      return this.http.post(`${environment.baseurl}/responsablerh/signup`,registerrequest)
    }
    forget(email:any){
      return this.http.post(`${environment.baseurl}/api/auth/forgetpassword?email=${email}`,{})
    }
    reset(resettoken:any,newpassword:any){
      return this.http.post(`${environment.baseurl}/api/auth/resetpassword/${resettoken}?newPassword=${newpassword}`,{})
    }
    changepassword(ChangePasswordRequest:any){
      return this.http.post(`${environment.baseurl}/api/auth/change-Password`,ChangePasswordRequest,{headers:this.headersoption})
    }
}
