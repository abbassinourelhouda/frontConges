import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetform!:FormGroup
resetlink=this.activeroute.snapshot.params["resettoken"]
  constructor(private formbuilder:FormBuilder,private authentificationservice:AuthentificationService,private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetform=this.formbuilder.group({
      newPassword:['',Validators.required]
  

    })
  }
reset(){
  this.authentificationservice.reset(this.resetlink,this.resetform.value.newPassword).subscribe((res:any)=>{
    console.log(res)
    Swal.fire("votre mot de passe est modifiée")
    this.route.navigateByUrl("/")
  })
}


}
