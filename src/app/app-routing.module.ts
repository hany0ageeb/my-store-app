import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PorductListComponent } from './porduct-list/porduct-list.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';

const routes: Routes = [
  { path:'', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: PorductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: ProductItemDetailComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
