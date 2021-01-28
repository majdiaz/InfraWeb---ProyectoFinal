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
      photo: 'https://cdn.shopify.com/s/files/1/0185/9786/products/40233-Just-a-Cinch-GraniteGray-WEB_c445aab1-f983-4ddf-b670-118c2d956e2f_1800x1200.jpg?v=1569122061',
      description: 'Correa Estilo Cincho no Requiere Collar, la correa Just-a-Cinch de Ruffwear es fuerte, resistente e inspirada en el alpinismo.',
      price: 950,
      cant: 1
    });

    this.products.push({
      name: 'Casa para gatos',
      photo: 'https://http2.mlstatic.com/D_NQ_NP_979488-MLM44243635915_122020-O.webp',
      description: 'La casita está exelente para un gato de tamaño pequeño o mediano.',
      price: 1300,
      cant: 1
    });
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
