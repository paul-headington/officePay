import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { PayPacketListComponent } from './components/pay-packet-list/pay-packet-list.component';
import { PayPacketDetailComponent } from './components/pay-packet-detail/pay-packet-detail.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:employeecode', component: EmployeeDetailsComponent },
  { path: 'paypackets', component: PayPacketListComponent },
  { path: 'paypackets/:id', component: PayPacketDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
