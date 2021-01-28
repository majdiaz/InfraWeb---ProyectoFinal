import { Component } from '@angular/core';
import { Product } from "../models/product";
import { ProductService } from "../services/product.service";
import { CarService } from "../services/car.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public products: Product[];
  constructor(private pService: ProductService, private carService: CarService) {
    this.products = this.pService.getProducts();
  }

  public addToCar(p: Product): void {
    this.carService.updateCar(p);
  }
}
