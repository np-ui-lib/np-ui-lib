import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { fakeBackendProvider } from './np-data-grid-demo/fake-backend-interceptor';
import { NpMenubarModule, NpNotificationsModule } from 'np-ui-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NpMenubarModule,
    NpNotificationsModule
  ],
  providers: [
    // provider used to create fake backend
    fakeBackendProvider,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
