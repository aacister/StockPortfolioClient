import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StockModule} from './stock/stock.module';
import { NewsSourceModule} from './newssource/newssource.module';



import {
SharedModule,
AuthService,
UsersService,
StocksService,
StockQuotesService,
NewsSourcesService,
NavBarComponent
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    SharedModule,
    StockModule,
    NewsSourceModule,
    rootRouting
  ],
  providers: [
    AuthService,
    UsersService,
    StocksService,
    StockQuotesService,
    NewsSourcesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }