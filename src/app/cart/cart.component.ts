import { Component, OnInit } from '@angular/core';
import { ProductLine } from '../models/productLine.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  fullName: string = '';
  address: string = '';
  confirmed: boolean = false;
  totalValue: number = 0;
  constructor(private cartService: CartService){
  }
  ngOnInit(): void {
  }
  get orderLines(): ProductLine[]{
    return this.cartService.lines;
  }
  get enableSubmit(): boolean{
    return this.orderLines && this.orderLines.length > 0 && this.fullName !== undefined && this.address !== undefined && this.fullName !== '' && this.address !== '' && this.cartService.lines.filter(l=>l.quantity <= 0).length <= 0;
  }
  onSubmit(): boolean{
    this.confirmed = true;
    this.totalValue = this.cartService.total;
    this.cartService.confirm();
    return false;
  }
  /*
  onLineAmountChanged(): void{

  }
  */
  getTotalValue(): number{
    return this.cartService.total;
  }
}
