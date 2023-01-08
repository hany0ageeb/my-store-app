import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ProductItemDetailComponent } from '../product-item-detail/product-item-detail.component';

@Component({
  selector: 'app-porduct-list',
  templateUrl: './porduct-list.component.html',
  styleUrls: ['./porduct-list.component.css']
})
export class PorductListComponent implements OnInit{
  private products: Product[] = [];
  constructor(private productService: ProductService, private router: Router){
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
    });
  }
  get sortedProducts(): Product[]{
    return this.products.sort((a: Product, b: Product)=>{
      return a.name.localeCompare(b.name);
    });
  }
  onProductSelected(product: Product): void{
    this.router.navigateByUrl(`/products/${product.id}`);
  }
}
