import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule} from './auth/auth.module';
import { StockModule} from './stock/stock.module';
import { UserStockModule } from './user-stock/user-stock.module';


import {
SharedModule,
ApiService,
AuthService,
StocksService,
StockQuotesService,
NewsSourcesService,
UsersService,
JwtService
HelperService,
StockStore,
NewsSourceStore,
UserStockQuoteStore,
UserNewsSourceStore,
UserArticleStore,
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
    AuthModule,
    StockModule,
    UserStockModule,
    rootRouting
  ],
  providers: [
    ApiService,
    AuthService,
    StocksService,
    StockQuotesService,
    NewsSourcesService,
    HelperService,
    UsersService,
    JwtService,
    StockStore,
    NewsSourceStore,
    UserStockQuoteStore,
    UserNewsSourceStore,
    UserArticleStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
