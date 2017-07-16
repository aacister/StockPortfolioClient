import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {User, Stock, StockQuote, StockStore, UserStockQuoteStore} from '../../shared';

@Component({
    selector: 'stockadd',
    templateUrl: './stock-add.component.html',
    styleUrls: ['./stock-add.component.css']
})
export class StockAddComponent implements OnInit{

  private stocks : Observable<Stock[]>;

  constructor(private stockStore: StockStore)
  {}

  public countries = [{"name": "Brazil", "code": "BR"},
                        {"name": "Canada", "code": "CA"},
                        {"name": "France", "code": "FR"},
                        {"name": "India", "code": "IN"},
                        {"name": "Mexico", "code": "MX"},
                        {"name": "Nepal", "code": "NP"},
                        {"name": "New Zealand", "code": "NZ"},
                        {"name": "Reunion", "code": "RE"},
                        {"name": "Singapore", "code": "SG"},
                        {"name": "Spain", "code": "ES"},
                        {"name": "Sri Lanka", "code": "LK"},
                        {"name": "United Kingdom", "code": "GB"},
                        {"name": "United States", "code": "US"}];

  public filterKey = '';
  public filteredItems = [];

  ngOnInit() {}

  filter(){
      if(this.filterKey !== ''){
          this.filteredItems = this.countries.filter(function(e){
              return e.name.toLowerCase().substr(0, this.filterKey.length) ===
              this.filterKey.toLowerCase();

          }.bind(this));
      }
      else{
          this.filteredItems = [];
      }
    }

    select(item){
      this.filterKey = item.name;
      this.filteredItems = [];
    }

}
