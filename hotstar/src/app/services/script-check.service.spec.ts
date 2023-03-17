import { TestBed } from '@angular/core/testing';

import { ScriptCheckService } from './script-check.service';

describe('ScriptCheckService', () => {
  let service: ScriptCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
