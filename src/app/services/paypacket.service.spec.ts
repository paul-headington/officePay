import { TestBed } from '@angular/core/testing';

import { PaypacketService } from './paypacket.service';

describe('PaypacketService', () => {
  let service: PaypacketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaypacketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
