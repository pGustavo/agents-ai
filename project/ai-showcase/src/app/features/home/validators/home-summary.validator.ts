import { HomeFrameworkCardModel } from '../models/home-summary.model';

export function assertHomeCards(cards: HomeFrameworkCardModel[]): void {
  if (!cards.length) {
    throw new Error('Home summary must include at least one framework card.');
  }

  for (const card of cards) {
    if (!card.slug || !card.name || !card.summary || !card.routePath) {
      throw new Error('Home summary card is missing required fields.');
    }
  }
}
