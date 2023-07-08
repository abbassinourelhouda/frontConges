import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  forgetform!:FormGroup
  constructor(private formbuilder:FormBuilder,private authentificationservice:AuthentificationService,private route:Router) { }

  ngOnInit(): void {
    this.forgetform=this.formbuilder.group({
      email:['',Validators.required]
  

    })
  }
forget(){
  this.authentificationservice.forget(this.forgetform.value.email).subscribe((res:any)=>{
    console.log(res)
    Swal.fire("email is send")
  })
}


}
