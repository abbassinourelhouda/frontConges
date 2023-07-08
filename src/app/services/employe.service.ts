import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) { }

 getAllEmploye(){
      return this.http.get(`${environment.baseurl}/employe/all`)
    }
    getonemeploye(id:any){
      return this.http.get(`${environment.baseurl}/employe/getone/${id}`)
    }
    updatemeploye(id:any,employe:any){
      return this.http.put(`${environment.baseurl}/employe/update/${id}`,employe)
    }
    updateimage(id:any,file:any){
      return this.http.put(`${environment.baseurl}/employe/updatephoto/${id}`,file)
    }
    signup(registerrequest:any,idequipe:any,idcontrat:any,email:any){
      return this.http.post(`${environment.baseurl}/employe/signup/${idequipe}/${idcontrat}/${email}`,registerrequest)
    }

    getAllEquipe(){
      return this.http.get(`${environment.baseurl}/equipe/all`)
    }

    
    getAllContrat(){
      return this.http.get(`${environment.baseurl}/contrat/all`)
    }
}
