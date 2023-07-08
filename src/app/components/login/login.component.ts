import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinform:FormGroup
  constructor(private formbuilder:FormBuilder,private authentificationservice:AuthentificationService,private route:Router) { }

  ngOnInit(): void {
    this.signinform=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]

    })
  }
signin(){
  this.authentificationservice.signin(this.signinform.value).subscribe((res:any)=>{
    console.log(res)

     if(res.enabled == true){
        localStorage.setItem("userconnect", JSON.stringify(res))
        localStorage.setItem('token', res.accessToken)
        localStorage.setItem('refreshtoken', res.refreshToken)
        localStorage.setItem("state", "0")
        
        // this.route.navigateByUrl("/home")
        if(res.roles[0]=="ROLE_EMPLOYE"){
          // this.route.navigateByUrl("/home/profile")
          window.location.href="http://localhost:4200/home/profile"
        }
        else{
          window.location.href="http://localhost:4200/home"
        }
       
      }

      
    },
    err=>{
      Swal.fire({
        icon:'error',
        title:'user not found',
        text:'email invalid',
        footer:'password invalid'
      })
      console.log(err);
      
    }
    )
}

}
