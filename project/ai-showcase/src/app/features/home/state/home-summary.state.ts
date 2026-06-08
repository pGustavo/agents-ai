import { Injectable, computed, inject, signal } from '@angular/core';
import { HomeSummaryService } from '../services/home-summary.service';
import { buildHomeHeadline } from '../utils/home-summary.utils';

@Injectable({ providedIn: 'root' })
export class HomeSummaryState {
  private readonly service = inject(HomeSummaryService);
  private readonly cardsSignal = signal(this.service.getCards());
  private readonly headlineSignal = signal(buildHomeHeadline());

  readonly cards = computed(() => this.cardsSignal());
  readonly headline = computed(() => this.headlineSignal());
}
