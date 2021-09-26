import { Component } from '@angular/core';
import { ProductQuotesService } from './product-quotes.service';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solar';
  val: number = 30;

  cities: City[];

    selectedCity: City;

    constructor( private productQuotesService: ProductQuotesService) {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        productQuotesService.getProductQuotes().subscribe(response => console.log(response))
    }
}
