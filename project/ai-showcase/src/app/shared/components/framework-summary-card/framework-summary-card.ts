import { ChangeDetectionStrategy, Component } from '@angular/core';
import { input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FrameworkSummaryCardView {
  slug: string;
  name: string;
  summary: string;
  architectureModel: string;
}

@Component({
  selector: 'app-framework-summary-card',
  imports: [RouterLink],
  templateUrl: './framework-summary-card.html',
  styleUrl: './framework-summary-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkSummaryCard {
  readonly profile = input.required<FrameworkSummaryCardView>();
}
