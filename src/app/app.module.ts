import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FilterPipe} from './sevices/filter.pipe';
import {FilterByObjectPipe} from './sevices/filterByObject.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    FilterPipe,
    FilterByObjectPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
