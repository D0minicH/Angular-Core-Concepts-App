import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, CustomersModule, SharedModule ],
  declarations: [ AppComponent ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule { }
