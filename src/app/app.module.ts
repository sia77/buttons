import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { sortPipe } from './sort.pipes';

@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    sortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
