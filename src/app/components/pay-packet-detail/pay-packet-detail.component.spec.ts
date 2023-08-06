import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPacketDetailComponent } from './pay-packet-detail.component';

describe('PayPacketDetailComponent', () => {
  let component: PayPacketDetailComponent;
  let fixture: ComponentFixture<PayPacketDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPacketDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayPacketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
