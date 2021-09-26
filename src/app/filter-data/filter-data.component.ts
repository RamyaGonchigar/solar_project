import { Component, OnInit } from '@angular/core';
import { ProductQuotesService } from '../product-quotes.service';

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.scss']
})
export class FilterDataComponent implements OnInit {

  constructor(public productQuotesService: ProductQuotesService) { }

  ngOnInit(): void {
  }
  silderValueChanged(value: number): void {
    console.log('silder ng model change ' , value);
    this.productQuotesService.silderValue$.next(+value);
    }
}
