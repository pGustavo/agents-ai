import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeSummaryFacade } from '../../state/home-summary.facade';
import { HomeSummaryGrid } from '../../components/home-summary-grid/home-summary-grid';

@Component({
  selector: 'app-home-page',
  imports: [HomeSummaryGrid],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  constructor(public readonly facade: HomeSummaryFacade) {}
}
