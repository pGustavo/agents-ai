import { TestBed } from '@angular/core/testing';
import { FrameworkNextjsService } from '../services/framework-nextjs.service';

describe('FrameworkNextjsService', () => {
  it('should return nextjs detail', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(FrameworkNextjsService);
    expect(service.getDetail().slug).toBe('nextjs');
  });
});
