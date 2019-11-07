import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../../app/shared/interfaces';

// @Injectable is a Decorator, that allows dependency injection
@Injectable()
export class DataService {

    baseUrl: string = 'assets/';

    constructor(private http: HttpClient) { }

    // Get all customers from database
    getCustomers(): Observable<ICustomer[]> {
      return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
          // handles errors when calls on the customers.json are made
          .pipe(
              catchError(this.handleError)
          );
  }

  // Get specific customer by id
  getCustomer(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(
        map(customers => {
          const customer = customers.filter((cust: ICustomer) => cust.id === id);
          return (customer && customer.length) ? customer[0] : null;
        }),
        catchError(this.handleError)
      );
  }

  // Get specific order of customers by id
  getOrders(id: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
      .pipe(
        map(orders => {
          const custOrders = orders.filter((order: IOrder) => order.customerId === id);
          return custOrders;
        }),
        catchError(this.handleError)
      );
  }

    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}
