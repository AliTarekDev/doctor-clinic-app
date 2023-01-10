import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  private clients:any= [];
  private services:any=[];
  private doctors: any=[];
  private partners: any=[];
 clientsListener= new Subject <{}>();
 serviceListener= new Subject<{}>();
 doctorsListener= new Subject<{}>();
 partnersListener= new Subject<{}>();

  constructor(private http: HttpClient) { }

  getClients() {
   
    this.http.get("http://otlobdoctoradmin.otlobdoctor-eg.com/api/ClientsApi/GetClients").subscribe(data=> {
      this.clients= data;
      this.clientsListener.next([...this.clients])
    })
  };

  getClientsService() {
    this.http.get("http://otlobdoctoradmin.otlobdoctor-eg.com/api/MedicalServicesApi/GetMedicalServices").subscribe(data=> {
      this.services= data;
      this.serviceListener.next([...this.services]);
    })
  };

  getDoctors() {
    this.http.get("http://otlobdoctoradmin.otlobdoctor-eg.com/api/DoctorsApi/GetDoctors").subscribe(data=> {
      this.doctors= data;
      this.doctorsListener.next([...this.doctors]);      
    })
  };

  getPartners() {
    this.http.get("http://otlobdoctoradmin.otlobdoctor-eg.com/api/partnersApi/Getpartners").subscribe(data=> {
      this.partners= data;
      this.partnersListener.next([...this.partners]);      
    })
  }

  getClientsData() {
    return this.clientsListener.asObservable();
  }

  getServiceData() {
    return this.serviceListener.asObservable();
  }

  getDoctorsData() {
    return this.doctorsListener.asObservable();
  }
  getPartnersData() {
    return this.partnersListener.asObservable();
  }

  

  joinOurTeam(Name: string, Mail: string, ServiceID: any, 
             Phone: string, Address: string, Skills: string, CV: File,SyndicateID: File, NationalID: File)   
    {

   const doctorData= new FormData();
   
    doctorData.append("Name", Name);
    doctorData.append("Mail", Mail);
    doctorData.append("ServiceID", ServiceID);
    doctorData.append("Phone", Phone);
    doctorData.append("Address", Address);
    doctorData.append("Skills", Skills);
    doctorData.append("CV", CV);
    doctorData.append("SyndicateID",SyndicateID);
    doctorData.append("NationalID", NationalID);
   // const data= {Name, Mail, ServiceID, Phone, Address, Skills, CV, SyndicateID,NationalID}
    this.http.post("http://otlobdoctoradmin.otlobdoctor-eg.com/api/JoinRequestsApi/PostJoinRequest", doctorData).subscribe(()=> {
      console.log("added!"); 
    });
  }


  bookNow(PatientName: string, ServiceID: string, Phone: string, Date: string, Time: string, Address: string, MedicalCase: string) {
    const bookFormData= {
      PatientName,
      ServiceID: parseInt(ServiceID),
      Phone,
      Date,
      Time,
      Address,
      MedicalCase, 
    };
    console.log(bookFormData);
    
    this.http.post("http://otlobdoctoradmin.otlobdoctor-eg.com/api/BookRequestsApi/PostBookRequest", bookFormData).subscribe(data=> {
      console.log("added!");
      
    })
  }



}
