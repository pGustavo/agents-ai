import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FrameworkReactModel } from '../../models/framework-react.model';
import { FrameworkDetail } from '../../../../shared/components/framework-detail/framework-detail';

@Component({
  selector: 'app-framework-react-overview',
  imports: [FrameworkDetail],
  templateUrl: './framework-react-overview.html',
  styleUrl: './framework-react-overview.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkReactOverview {
  readonly detail = input.required<FrameworkReactModel>();
}
