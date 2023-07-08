import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { EmployeService } from 'src/app/services/employe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profilemploye',
  templateUrl: './profilemploye.component.html',
  styleUrls: ['./profilemploye.component.css']
})
export class ProfilemployeComponent implements OnInit {
userconnect=JSON.parse(localStorage.getItem("userconnect")!)
changepasswordform:FormGroup
employe:any
employeform:FormGroup
fileToUpload:Array<File>=[];

constructor(private employeservice:EmployeService,private formbuilder:FormBuilder,private authservice:AuthentificationService,private route:Router) { }

ngOnInit(): void {
  this.employeform=this.formbuilder.group({
    username:['',Validators.required],
    email:['',Validators.required],
    nom:['',Validators.required],
    prenom:['',Validators.required],
    adresse:['',Validators.required],
    tel:['',Validators.required],
    numcin:['',Validators.required],
  

  })

   this.changepasswordform=this.formbuilder.group({
      oldPassword:['',Validators.required],
      newPassword:['',Validators.required]

    })
  this.getone()
}
getone(){
this.employeservice.getonemeploye(this.userconnect.id).subscribe((res:any)=>{
  this.employe=res
  console.log("detail user",this.employe)
  this.employeform.patchValue({
    username:this.employe.username,
    email:this.employe.email,
    adresse:this.employe.adresse, 
    numcin:this.employe.numcin,
     nom:this.employe.nom,
     prenom:this.employe.prenom,
     tel:this.employe.tel,


  })
})
}
handleFileInput(files: any){
  this.fileToUpload=<Array<File>>files.target.files;
  console.log(this.fileToUpload);
  this.updateimage()
}
updateimage(){
  let formdata=new FormData();
  formdata.append("file",this.fileToUpload[0]);
  this.employeservice.updateimage(this.userconnect.id,formdata).subscribe((res:any)=>{
 
    console.log("detail user",res)
    this.getone()
    // Swal.fire("votre image a été modifiée!")
  })
}

update(){
  
  this.employeservice.updatemeploye(this.userconnect.id,this.employeform.value).subscribe((res:any)=>{
 Swal.fire("votre profile est modifiée avec succées!!")
    console.log("detail user",res)
    this.getone()
    // Swal.fire("votre image a été modifiée!")
  })
}

changepassword(){
  this.authservice.changepassword(this.changepasswordform.value).subscribe((res:any)=>{
    console.log("detail user",res)
    Swal.fire("votre mot de passe a été changé")
    this.route.navigateByUrl("/")
    
  })
}
}
