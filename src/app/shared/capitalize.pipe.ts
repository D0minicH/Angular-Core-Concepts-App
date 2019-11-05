import { Pipe, PipeTransform } from '@angular/core';

// Custom Pipe to capitalize first Letter of a Word (Example for custom pipes)
@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
    transform(value: any) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
}
