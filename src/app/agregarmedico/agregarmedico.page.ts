import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Medico } from "../models/medico";
import { MedicoService } from "../services/medico.service";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";

import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { identity } from 'rxjs';
@Component({
  selector: 'app-agregarmedico',
  templateUrl: './agregarmedico.page.html',
  styleUrls: ['./agregarmedico.page.scss'],
})
export class AgregarmedicoPage implements OnInit {
  public myForm: FormGroup;
  public medico: Medico; 
  constructor(private medicoService:MedicoService, private fb:FormBuilder, private router: Router, private toastController: ToastController) {
    this.myForm = this.fb.group({            
      nombre: [""],
      imagen: [""],
      grado: [""],
      descripcion: [""],
      activo: true,
      contacto: [""]
    });
   }

   create() {   
    this.medico = {      
      id: "",
      name: this.myForm.controls.nombre.value,          
      image: this.myForm.controls.imagen.value,
      grade: this.myForm.controls.grado.value,
      description: this.myForm.controls.descripcion.value,
      active: this.myForm.controls.activo.value,
      contact: this.myForm.controls.contacto.value,
   }
   
   this.medicoService.createMedicos(this.medico);  
   this.presentToastA();

   

  }

  async presentToastA(){
    const toast = await this.toastController.create({
      message: 'Médico registrado.',
      duration: 3000
    });
    toast.present();
  }

  volver(){
    this.router.navigate(['/tabs/tab2']);
  }

  ngOnInit() {
  }

}
