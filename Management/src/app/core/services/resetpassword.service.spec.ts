import { TestBed, inject } from '@angular/core/testing';

import { ResetPasswordService } from './resetpassword.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetPasswordService]
    });
  });

  it('should be created', inject([ResetPasswordService], (service:ResetPasswordService) => {
    expect(service).toBeTruthy();
  }));
});