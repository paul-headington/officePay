
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paypacket } from 'src/app/models/paypacket';
import { PaypacketService } from 'src/app/services/paypacket.service';

@Component({
  selector: 'app-pay-packet-detail',
  templateUrl: './pay-packet-detail.component.html',
  styleUrls: ['./pay-packet-detail.component.css']
})
export class PayPacketDetailComponent implements OnInit {
  id!: number;
  paypacket!: Paypacket;
  statuses = ['Pending','Executed','Paid'];

  constructor(
    private paypacketService: PaypacketService, 
    private route: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit() {

    this.paypacket = new Paypacket();
    this.id = this.route.snapshot.params['id'];

    this.paypacketService.getPaypacket(this.id)
      .subscribe(data => {
        this.paypacket = data;
      }, error => console.log(error));
  }

  public paypacketsList() {
    this.router.navigate(['paypackets']);
  }

  public savePaypacket(data: Paypacket){
    console.log(data);
  }
}
