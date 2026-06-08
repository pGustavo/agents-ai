import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppShell } from './shared/components/app-shell/app-shell';

@Component({
  selector: 'app-root',
  imports: [AppShell],
  template: `<app-shell></app-shell>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
