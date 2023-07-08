import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupform:FormGroup
  fileToUpload:Array<File>=[];
  constructor(private formbuilder:FormBuilder,private authentificationservice:AuthentificationService,private route:Router) { }

  ngOnInit(): void {
    this.signupform=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      matricule:['',Validators.required],
      service:['',Validators.required],

      role:['',Validators.required],


    })
  }
  handleFileInput(files: any){
    this.fileToUpload=<Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }
  signup(){
    this.signupform.patchValue({
      role:["admin"]
    })
    let formdata=new FormData();
  formdata.append("username",this.signupform.value.username);
  formdata.append("email",this.signupform.value.email);
  formdata.append("password",this.signupform.value.password);
  formdata.append("matricule",this.signupform.value.matricule);
  formdata.append("service",this.signupform.value.service);

  formdata.append("role",this.signupform.value.role);
  formdata.append("file",this.fileToUpload[0]);

    this.authentificationservice.signup(formdata).subscribe((res:any)=>{
      console.log(res)
      this.route.navigateByUrl("/")
    })
  }

}
