import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-prevencion',
  templateUrl: './prevencion.page.html',
  styleUrls: ['./prevencion.page.scss'],
})
export class PrevencionPage implements OnInit {

  public avisos = [];

  constructor(private router: Router) {

    this.avisos.push({
      image: 'https://assets.eleconomista.com.mx/__export/1606187095268/sites/eleconomista/img/2020/11/23/ilustracion_lavado_manos.png_673822677.png',
      contenido: 'Lávate las manos con frecuencia. Usa agua y jabón o un desinfectante de manos a base de alcohol.'
    });

    this.avisos.push({
      image: 'https://www.gaceta.unam.mx/wp-content/uploads/2020/08/200824-aca1-des-f1-uso-cubrebocas2.jpg',
      contenido: 'Utiliza mascarilla cuando no sea posible mantener el distanciamiento físico.'
    });

    this.avisos.push({
      image: 'https://png.pngtree.com/png-vector/20200418/ourlarge/pngtree-dont-touch-eyes-mouth-nose-prevent-contagion-covid-19-illustration-vector-png-image_2184205.jpg',
      contenido: 'No te toques los ojos, la nariz ni la boca.'
    });

    this.avisos.push({
      image: 'https://www.redaccionmedica.com/images/destacados/coronavirus-que-es-etiqueta-respiratoria-como-aplicarla-correctamente-7461.jpg',
      contenido: 'Cuando tosas o estornudes, cúbrete la nariz y la boca con el codo flexionado o con un pañuelo.'
    });

    this.avisos.push({
      image: 'https://www.wakeandlisten.com/wp-content/uploads/2020/03/quedate-en-tu-casa-cancion.jpg',
      contenido: 'Si no te encuentras bien, quédate en casa'
    });

    this.avisos.push({
      image: 'https://medicaldialogues.in/wp-content/uploads/2018/04/doctor.png',
      contenido: 'En caso de que tengas fiebre, tos o dificultad para respirar, busca atención médica.'
    });

  }
  ngOnInit() {
  }

   volver(){
    this.router.navigate(['/tabs/tab1']);
  }

}
