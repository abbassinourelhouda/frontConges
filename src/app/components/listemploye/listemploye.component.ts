import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})
export class ListemployeComponent implements OnInit {

  listemploye:any
  listequipe:any
  listcontrat:any
  signupform:FormGroup
  fileToUpload:Array<File>=[];
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  constructor(private employeservice:EmployeService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signupform=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      adresse:['',Validators.required],
      tel:['',Validators.required],
      numcin:['',Validators.required],
      role:['',Validators.required],
      equipe_id:['',Validators.required],
      contrat_id:['',Validators.required]

    })
    this.getAllEmploye()
    this.getAllcontrat()
    this.getAllequipe()
  }
getAllEmploye(){
  this.employeservice.getAllEmploye().subscribe((res:any)=>{
    this.listemploye=res
    console.log("list employe",this.listemploye)
  })
}

getAllcontrat(){
  this.employeservice.getAllContrat().subscribe((res:any)=>{
    this.listcontrat=res
    console.log("list contrat",this.listcontrat)
  })
}
getAllequipe(){
  this.employeservice.getAllEquipe().subscribe((res:any)=>{
    this.listequipe=res
    console.log("list equipe",this.listequipe)
  })
}
handleFileInput(files: any){
  this.fileToUpload=<Array<File>>files.target.files;
  console.log(this.fileToUpload);
}
signup(){
  this.signupform.patchValue({
    role:["employe"]
  })
  let formdata=new FormData();
formdata.append("username",this.signupform.value.username);
formdata.append("email",this.signupform.value.email);
formdata.append("password",this.signupform.value.password);
formdata.append("nom",this.signupform.value.nom);
formdata.append("prenom",this.signupform.value.prenom);
formdata.append("numcin",this.signupform.value.numcin);
formdata.append("adresse",this.signupform.value.adresse);
formdata.append("tel",this.signupform.value.tel);


formdata.append("role",this.signupform.value.role);
formdata.append("file",this.fileToUpload[0]);

  this.employeservice.signup(formdata,this.signupform.value.equipe_id,this.signupform.value.contrat_id,this.userconnect.email).subscribe((res:any)=>{
    console.log(res)
    Swal.fire("employé ajouté avec succées!")
    this.getAllEmploye()
  })
}
}
