import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Medico } from "../models/medico";

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private firestore: AngularFirestore) { }

  getMedicos(){
    return this.firestore.collection('Medicos').snapshotChanges();
  }

  createMedicos (medico: Medico){
    return this.firestore.collection('Medicos').add(medico);
  }

  updateMedico(medico: Medico, id: string){
    this.firestore.doc('Medicos/'+id).update(medico);
  }

  deleteMedico( id: string){
    this.firestore.doc('Medicos/'+id).delete();
 }
}
