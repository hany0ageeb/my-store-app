import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductLine } from '../models/productLine.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  lines: ProductLine[] = [
  ];
  constructor() { 
  }
  addProduct(product: Product, quantity: number = 1): void{
    let line = this.lines.filter(l=>l.product.id === product.id)[0];
    if(line){
      line.quantity += quantity;
    }
    else{
      this.lines.push(new ProductLine(product, quantity));
    }
  }
  removeProduct(product: Product, quantity: number = 1): void{
    let line = this.lines.filter(l=>l.product.id === product.id)[0];
    if(line){
      line.quantity -= quantity;
      if(line.quantity <= 0){
        this.lines = this.lines.filter(l=>l.product.id != product.id);
      }
    }
  }
  get total(): number{
    let totalValue: number = 0;
    this.lines.forEach((line)=>{
      totalValue += line.total;
    });
    return totalValue;
  }
  confirm():void{
    this.lines = [];
  }
}
