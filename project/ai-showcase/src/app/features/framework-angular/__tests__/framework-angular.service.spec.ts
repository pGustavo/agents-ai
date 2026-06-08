import { TestBed } from '@angular/core/testing';
import { FrameworkAngularService } from '../services/framework-angular.service';

describe('FrameworkAngularService', () => {
  it('should return angular detail', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(FrameworkAngularService);
    expect(service.getDetail().slug).toBe('angular');
  });
});
