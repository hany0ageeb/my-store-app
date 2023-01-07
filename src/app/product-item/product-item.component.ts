import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() product: Product= new Product();
  constructor(private cartService: CartService){
  }
  ngOnInit(): void {
  }
  addToCart(): boolean{
    this.cartService.addProduct(this.product, 1);
    return false;
  }
  removeFromCart(): boolean{
    this.cartService.removeProduct(this.product, 1);
    return false;
  }
  get enableRemoveFromCart(): boolean{
    return this.cartService.lines.filter(p=>p.product.id === this.product.id).length > 0;
  }
}
