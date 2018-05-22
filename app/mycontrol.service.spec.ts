import { TestBed, inject } from '@angular/core/testing';

import { MycontrolService } from './mycontrol.service';

describe('MycontrolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MycontrolService]
    });
  });

  it('should be created', inject([MycontrolService], (service: MycontrolService) => {
    expect(service).toBeTruthy();
  }));
});
