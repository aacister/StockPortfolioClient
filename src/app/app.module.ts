import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import { AuthModule} from './auth/auth.module';
import { StockModule} from './stock/stock.module';
import { UserModule } from './user/user.module';


import {
NavBarComponent,
SharedModule,
ApiService,
AuthService,
AuthGuard,
NoAuthGuard,
StocksService,
StockQuotesService,
NewsSourcesService,
UsersService,
JwtService,
StockStore,
NewsSourceStore,
UserStockQuoteStore,
UserNewsSourceStore,
UserArticleStore

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
    HomeModule,
    StockModule,
    UserModule,
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
    NoAuthGuard,
    StockStore,
    NewsSourceStore,
    UserStockQuoteStore,
    UserNewsSourceStore,
    UserArticleStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
