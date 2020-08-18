import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { fakeBackendProvider } from './np-data-grid-demo/FakeBackendInterceptor';
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
