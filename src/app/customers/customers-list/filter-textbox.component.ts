import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  // ngModel simulates 2-way data-binding & automatically updates the value of the input
  // --> must be declared in customers.module
  template: `Filter: <input type="text" [(ngModel)] = "filter" />`
})
export class FilterTextboxComponent implements OnInit {

  private _filter: string;
  @Input() get filter() {
      return this._filter;
  }

  set filter(val: string) {
      this._filter = val;
      this.changed.emit(this.filter); // Raise changed event
  }

  // EventEmitter enables sending data from a child to its parent
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
