import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit{
  product: Product | undefined = new Product();
  constructor(
    private activedRouter: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService) {
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.product = data.filter((p)=>p.id === Number(this.activedRouter.snapshot.params['id']))[0];
    });
  }
  addToCart(): boolean{
    if(this.product){
      this.cartService.addProduct(this.product, 1);
    }
    return false;
  }
}
