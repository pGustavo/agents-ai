import { TestBed } from '@angular/core/testing';
import { FrameworkReactService } from '../services/framework-react.service';

describe('FrameworkReactService', () => {
  it('should return react detail', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(FrameworkReactService);
    expect(service.getDetail().slug).toBe('react');
  });
});
