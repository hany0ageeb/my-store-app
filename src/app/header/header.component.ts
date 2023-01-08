import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private cartService: CartService){

  }
  ngOnInit(): void {
    
  }
  get productCount() : number | undefined{
    return this.cartService.productCount() <= 0? undefined : this.cartService.productCount();
  }
}
