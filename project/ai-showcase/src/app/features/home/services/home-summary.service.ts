import { Injectable, inject } from '@angular/core';
import { FrameworkContent } from '../../../core/services/framework-content';
import { mapFrameworkProfileToHomeCard } from '../mappers/home-summary.mapper';
import { HomeFrameworkCardModel } from '../models/home-summary.model';
import { assertHomeCards } from '../validators/home-summary.validator';

@Injectable({ providedIn: 'root' })
export class HomeSummaryService {
  private readonly content = inject(FrameworkContent);

  getCards(): HomeFrameworkCardModel[] {
    const cards = this.content
      .getFrameworkProfiles()
      .map(mapFrameworkProfileToHomeCard);
    assertHomeCards(cards);
    return cards;
  }
}
