import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FrameworkNextjsOverview } from '../../components/framework-nextjs-overview/framework-nextjs-overview';
import { FrameworkNextjsFacade } from '../../state/framework-nextjs.facade';

@Component({
  selector: 'app-framework-nextjs-page',
  imports: [FrameworkNextjsOverview],
  templateUrl: './framework-nextjs-page.html',
  styleUrl: './framework-nextjs-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkNextjsPage {
  private readonly facade = inject(FrameworkNextjsFacade);
  readonly framework = this.facade.detail;
}
