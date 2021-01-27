import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

public medicos = [];
  constructor() {
     this.medicos.push({
      image: 'https://th.bing.com/th/id/R1455aa957e3fa8e8f8a1fc7c90a59fb1?rik=iy6BhCtGBQHNQQ&riu=http%3a%2f%2fspanish.peopledaily.com.cn%2fNMediaFile%2f2017%2f0117%2fFOREIGN201701171720000181087934494.jpg&ehk=KZecv7PJTDYid16bzYGHOKZuyrRLuyk0xZFW2hR5%2fjM%3d&risl=&pid=ImgRaw',
      name: 'María Flores Cantú',
      grade: 'Médico preventivo y de salud públca',
      description: 'Encargada de aplicar, fomentar e investigar actividades y políticas de promoción y protección de la salud; además de la vigilancia de la salud de la población, de la identificación de sus necesidades sanitarias y de la planificación, gestión y evaluación de los servicios sanitarios.',
      active: true,
      contact: 'https://wa.link/v6731e'
    });
     this.medicos.push({
      image: 'https://th.bing.com/th/id/OIP.VHud6RdRE1ewqYsA4t9BhgHaHb?pid=Api&rs=1',
      name: 'Eduardo Alamos Rodriguez',
      grade: 'Médico Anestesiólogo',
      description: 'Dedicado a la atención y cuidados especiales de los pacientes durante las intervenciones quirúrgicas u otros procesos que puedan resultar molestos o dolorosos (endoscopia, radiología intervencionista, etc.).',
      active: true,
      contact: 'https://wa.link/v6731e'
    });
     this.medicos.push({
      image: 'https://thumbs.dreamstime.com/z/mujer-del-m%C3%A9dico-24459252.jpg',
      name: 'Alexandra Morgan Carrasco',
      grade: 'Médico geriatrico',
      description: 'Dedicada al estudio de la prevención, el diagnóstico, el tratamiento y la rehabilitación de las enfermedades en las personas de la tercera edad.',
      active: true,
      contact: 'https://wa.link/v6731e'
    });
     this.medicos.push({
      image: 'https://th.bing.com/th/id/OIP.dHf23_PtribcKHQ5mc2cRgHaFN?pid=Api&rs=1',
      name: 'Lionel Andrés Messi Cuccittini',
      grade: 'Médico Infectólogo',
      description: 'Se encarga del estudio, la prevención, el diagnóstico y el tratamiento de las enfermedades producidas por agentes infecciosos (bacterias, virus, hongos, parásitos y priones).',
      active: true,
      contact: 'https://wa.link/v6731e'
    });
  }

}
