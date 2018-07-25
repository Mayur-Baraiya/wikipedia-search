import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { WikipediaService } from './wikipedia.service';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WikipediaSearchComponent } from './wikipedia-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaSearchComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule
  ],
  providers: [WikipediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
