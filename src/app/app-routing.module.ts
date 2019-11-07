import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';



const routes: Routes = [
  // Redirect in case you call the startpage
  { path: '', pathMatch: 'full', redirectTo: '/customers'},

  // Alternative to standalone feature-routing file, apparently not working because of order, why?
  { path: 'orders/:id', component: OrdersComponent },

  // Redirect in case you call a non-existing path
  { path: '**', pathMatch: 'full', redirectTo: '/customers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
