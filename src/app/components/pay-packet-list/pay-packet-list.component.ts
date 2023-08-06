import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paypacket } from 'src/app/models/paypacket';
import { PaypacketService } from 'src/app/services/paypacket.service';

@Component({
  selector: 'app-pay-packet-list',
  templateUrl: './pay-packet-list.component.html',
  styleUrls: ['./pay-packet-list.component.css']
})
export class PayPacketListComponent implements OnInit {

  paypackets!: Paypacket[];
  paypacket: Paypacket = new Paypacket();

  constructor(
    private paypacketService: PaypacketService, 
    private router: Router,
  ) { }

  ngOnInit() {
    this.paypacketService.getPaypackets().subscribe(data => {
      console.log(data);
      this.paypackets = data;
    })
  }

  paypacketDetails(id: number) {
    this.router.navigate(['paypackets', id]);
  }
}
