import { Component, OnInit } from '@angular/core';
import { ProductQuotesService } from '../product-quotes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solar-card',
  templateUrl: './solar-card.component.html',
  styleUrls: ['./solar-card.component.scss']
})
export class SolarCardComponent implements OnInit {

  productQuotesList$: Observable<Array<any>>;
  newSliderValue : number;
  constructor( public productQuotesService: ProductQuotesService) {


}
  ngOnInit(): void {
    this.productQuotesList$ = this.productQuotesService.getProductQuotes();
    this.productQuotesService.silderValue$.subscribe(value => {
      this.newSliderValue =value
    })

  }

}
