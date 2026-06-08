import { TestBed } from '@angular/core/testing';
import { HomeSummaryService } from '../services/home-summary.service';

describe('HomeSummaryService', () => {
  it('should provide framework cards', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(HomeSummaryService);
    const cards = service.getCards();
    expect(cards.length).toBe(3);
  });
});
