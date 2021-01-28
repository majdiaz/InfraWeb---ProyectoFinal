import { Component, OnInit } from '@angular/core';
import { Medico } from "../models/medico";
import { MedicoService } from "../services/medico.service";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ToastController } from "@ionic/angular";
@Component({
  selector: 'app-editarmedico',
  templateUrl: './editarmedico.page.html',
  styleUrls: ['./editarmedico.page.scss'],
})
export class EditarmedicoPage implements OnInit {
  public myForm:FormGroup;
  public medico: Medico;

  constructor(private medicoService:MedicoService,private actroute: ActivatedRoute, 
              private fb:FormBuilder, private router: Router, private toastController: ToastController) { 
                this.actroute.queryParams.subscribe(
                  params => {
                    if(params && params.special){
                      this.medico= JSON.parse(params.special) as Medico;
                      console.log(this.medico);
                    }
                    }
                    );
                    this.myForm = this.fb.group({            
                      nombre: [""],
                      imagen: [""],
                      grado: [""],
                      descripcion: [""],
                      activo: true,
                      contacto: [""]
                    });
              }

  ngOnInit() {
  }

  volver(){
    this.router.navigate(['/tabs/tab2']);
  }

  update(m: Medico){
    if(this.myForm.controls.nombre.value!=""){
      m.name=this.myForm.controls.nombre.value;
    }
    if(this.myForm.controls.imagen.value!=""){
    m.image=this.myForm.controls.imagen.value;
    }
    if(this.myForm.controls.grado.value!=""){
      m.grade=this.myForm.controls.grado.value;
    }
    if(this.myForm.controls.descripcion.value!=""){
      m.description=this.myForm.controls.descripcion.value;
    }
    if(this.myForm.controls.contacto.value!=""){
      m.contact=this.myForm.controls.contacto.value;
    }
                   
    this.medicoService.updateMedico(m, m.id);

    this.presentToastE();
  }

  async presentToastE(){
    const toast = await this.toastController.create({
      message: 'Datos editados.',
      duration: 3000
    });
    toast.present();
  }

}
