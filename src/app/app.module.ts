import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  imports:      [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    CustomersModule,
    OrdersModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule { }
