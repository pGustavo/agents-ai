import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FrameworkNextjsModel } from '../../models/framework-nextjs.model';
import { FrameworkDetail } from '../../../../shared/components/framework-detail/framework-detail';

@Component({
  selector: 'app-framework-nextjs-overview',
  imports: [FrameworkDetail],
  templateUrl: './framework-nextjs-overview.html',
  styleUrl: './framework-nextjs-overview.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkNextjsOverview {
  readonly detail = input.required<FrameworkNextjsModel>();
}
