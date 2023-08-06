import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPacketListComponent } from './pay-packet-list.component';

describe('PayPacketListComponent', () => {
  let component: PayPacketListComponent;
  let fixture: ComponentFixture<PayPacketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPacketListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayPacketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
