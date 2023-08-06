import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { PayPacketListComponent } from './components/pay-packet-list/pay-packet-list.component';
import { PayPacketDetailComponent } from './components/pay-packet-detail/pay-packet-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentListComponent } from './components/component-list/component-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    PayPacketListComponent,
    PayPacketDetailComponent,
    ComponentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
