import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
    declarations: [ CapitalizePipe ],
    // make available for all Modules
    exports:      [ CapitalizePipe  ]
})
export class SharedModule { }
