import { Injectable, inject } from '@angular/core';
import { HomeSummaryState } from './home-summary.state';

@Injectable({ providedIn: 'root' })
export class HomeSummaryFacade {
  private readonly state = inject(HomeSummaryState);

  readonly cards = this.state.cards;
  readonly headline = this.state.headline;
}
