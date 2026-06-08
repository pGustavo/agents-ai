import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FrameworkReactOverview } from '../../components/framework-react-overview/framework-react-overview';
import { FrameworkReactFacade } from '../../state/framework-react.facade';

@Component({
  selector: 'app-framework-react-page',
  imports: [FrameworkReactOverview],
  templateUrl: './framework-react-page.html',
  styleUrl: './framework-react-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkReactPage {
  private readonly facade = inject(FrameworkReactFacade);
  readonly framework = this.facade.detail;
}
