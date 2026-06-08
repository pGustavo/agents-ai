import { TestBed } from '@angular/core/testing';
import { HomeSummaryFacade } from '../state/home-summary.facade';

describe('HomeSummaryFacade', () => {
  it('should expose cards and headline', () => {
    TestBed.configureTestingModule({});
    const facade = TestBed.inject(HomeSummaryFacade);
    expect(facade.headline()).toContain('Showcase');
    expect(facade.cards().length).toBe(3);
  });
});
