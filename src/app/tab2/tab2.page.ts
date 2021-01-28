import { Component } from '@angular/core';
import { Medico } from "../models/medico";
import { MedicoService } from "../services/medico.service";
import { Router, NavigationExtras } from "@angular/router";
import { ToastController } from "@ionic/angular";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

public medicos: Medico[];
public ide: string;
  constructor(private service: MedicoService, private router: Router,private toastController: ToastController) {
    this.service.getMedicos().subscribe(data => {
      this.medicos = data.map(e => {
        return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as any
        } as Medico;
      });
    });
  }

  verMas(m: Medico): void {
    this.ide = m.id;
  }
  verMenos(m: Medico): void {
    this.ide = "   ";
  }

  agregarMedico(){    
    this.router.navigate(['/agregarmedico']);
  }

  borrarMedico(id: string){
    this.service.deleteMedico(id);
    this.presentToast();
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Médico eliminado.',
      duration: 3000
    });
    toast.present();
  }

  editarMedico(m: Medico){
    let navext: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(m)
      }
    };
    
    this.router.navigate(['/editarmedico'],navext);
  }

  }
