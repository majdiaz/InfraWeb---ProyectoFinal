import { Injectable } from '@angular/core';
import { Product } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() { 
    this.products.push({
      name: 'Cubrebocas quirúrgico',
      photo: 'https://prelive.travers.com.mx/product/image/medium/96-003-114_2.jpg',
      description: 'Paquete de 50 Cubrebocas Tricapa Plisado con Termosellado',
      price: 95,
      cant: 1
    });
    this.products.push({
      name: 'Cubrebocas de tela',
      photo: 'https://www.delsol.com.mx/wp-content/uploads/2020/06/7500555600050-1.jpg',
      description: 'Paquete de 5 Cubrebocas de tela optima',
      price: 79.90,
      cant: 1
    });

    this.products.push({
      name: 'Gel antibacterial',
      photo: 'https://resources.claroshop.com/medios-plazavip/mkt/5e8ff535a145a_1-800-x-800-neutrojpg.jpg',
      description: 'gel antibacterial blumen para manos de 1 litro Neutro hand sanitizer.',
      price: 249,
      cant: 1
    });

    this.products.push({
      name: ' Tanque de oxigeno',
      photo: 'https://resources.claroshop.com/medios-plazavip/mkt/5e8e36035ee53_r-ec680vop_1jpg.jpg',
      description: 'Tanque de oxigeno 680 litros con carrito, kit completo',
      price: 7999,
      cant: 1
    });
    this.products.push({
      name: ' Careta de proteccion facial',
      photo: 'https://cdn1.coppel.com/images/catalog/pr/7197852-1.jpg',
      description: 'Protege tu cara de polvo, partículas y más con la careta de protección, la pieza que no te puede faltar entre tus artículos de higiene',
      price: 99,
      cant: 1
    });
    this.products.push({
      name: ' botiquin de protección completoTanque de oxigeno',
      photo: 'https://www.ecestaticos.com/imagestatic/clipping/9da/8d5/9da8d5436f97bd692c59c108aeeee9ac/el-botiquin-esencial-para-luchar-contra-el-coronavirus-en-casa.jpg?mtime=1587116058',
      description: 'El botiquin especial para luchar contra el coronavirus',
      price: 250,
      cant: 1
    });
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
