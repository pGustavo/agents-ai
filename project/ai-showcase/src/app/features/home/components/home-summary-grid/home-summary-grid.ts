import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HomeFrameworkCardModel } from '../../models/home-summary.model';
import { FrameworkSummaryCard } from '../../../../shared/components/framework-summary-card/framework-summary-card';

@Component({
  selector: 'app-home-summary-grid',
  imports: [FrameworkSummaryCard],
  templateUrl: './home-summary-grid.html',
  styleUrl: './home-summary-grid.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryGrid {
  readonly cards = input.required<HomeFrameworkCardModel[]>();
}
