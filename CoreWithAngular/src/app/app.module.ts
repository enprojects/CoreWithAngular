import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsFetcherComponent } from './items-fetcher/items-fetcher.component';
import { HttpServiceService } from './shared/http-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemsFetcherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
