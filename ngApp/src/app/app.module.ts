import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { EmplistComponent } from './emplist/emplist.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    EmplistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
