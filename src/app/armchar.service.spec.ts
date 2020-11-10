import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';
import { ArmcharService } from './armchar.service';

describe('ArmcharService', () => {
  let service: ArmcharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmcharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
