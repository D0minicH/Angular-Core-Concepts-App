import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  // Variable to store the original List values
  private _customers: ICustomer[] = [];

  // Get Data from people Array in customers.module (Parent)
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  // Handle incoming value-changes
  set customers(value: ICustomer[]) {
    // check if an actual Value gets passed in. If not, don't iterate through the customers-list
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  // Variable to store the filtered List values
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode = 'USD';

  constructor() { }

  ngOnInit() {
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.orderTotal.toString().indexOf(data) > -1;
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  sort(prop: string) {
    // A sorter service will handle the sorting
  }

}
