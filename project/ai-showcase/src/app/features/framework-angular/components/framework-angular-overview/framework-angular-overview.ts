import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FrameworkAngularModel } from '../../models/framework-angular.model';
import { FrameworkDetail } from '../../../../shared/components/framework-detail/framework-detail';

@Component({
  selector: 'app-framework-angular-overview',
  imports: [FrameworkDetail],
  templateUrl: './framework-angular-overview.html',
  styleUrl: './framework-angular-overview.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkAngularOverview {
  readonly detail = input.required<FrameworkAngularModel>();
}
