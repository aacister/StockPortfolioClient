import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarModule } from './navbar/navbar.module';
import {HomeModule} from './home/home.module';
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
JwtService,
AuthGuard,
StockStore,
NewsSourceStore,
UserStockQuoteStore,
UserNewsSourceStore,
UserArticleStore

} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    HomeModule,
    NavBarModule,
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
    UsersService,
    JwtService,
    AuthGuard,
    StockStore,
    NewsSourceStore,
    UserStockQuoteStore,
    UserNewsSourceStore,
    UserArticleStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
