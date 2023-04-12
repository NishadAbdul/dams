import { TestBed } from '@angular/core/testing';

import { DocumentsRequiredService } from './documents-required.service';

describe('DocumentsRequiredService', () => {
  let service: DocumentsRequiredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsRequiredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
