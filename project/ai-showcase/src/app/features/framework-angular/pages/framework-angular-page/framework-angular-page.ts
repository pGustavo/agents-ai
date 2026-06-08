import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FrameworkAngularFacade } from '../../state/framework-angular.facade';
import { FrameworkAngularOverview } from '../../components/framework-angular-overview/framework-angular-overview';

@Component({
  selector: 'app-framework-angular-page',
  imports: [FrameworkAngularOverview],
  templateUrl: './framework-angular-page.html',
  styleUrl: './framework-angular-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkAngularPage {
  private readonly facade = inject(FrameworkAngularFacade);
  readonly framework = this.facade.detail;
}
