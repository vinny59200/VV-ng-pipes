import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecimalComponent } from './decimal/decimal.component';
import { PercentComponent } from './percent/percent.component';
import { CurrencyComponent } from './currency/currency.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    DecimalComponent,
    PercentComponent,
    CurrencyComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
